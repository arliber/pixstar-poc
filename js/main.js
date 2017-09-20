/* CAROUSEL */

var pixstarCarousel = new Siema({
  selector: '#pixstar-carousel',
  duration: 200,
  easing: 'ease-out',
  perPage: {
    0: 1,
    450: 2,
    768: 3,
    1024: 3,
  },
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: true,
  onInit: function() { },
  onChange: function() { },
});

// setInterval(function() { pixstarCarousel.next() } , 3000);

document.querySelector('#pixstar-carousel-prev').addEventListener('click', () => pixstarCarousel.prev());
document.querySelector('#pixstar-carousel-next').addEventListener('click', () => pixstarCarousel.next());

// Tingle
var modal = new tingle.modal({
  footer: false,
  stickyFooter: false,
  closeMethods: ['overlay', 'escape'], /*button*/
  closeLabel: 'Close',
  onOpen: function () {
    toggleBodyScroll(false);
  },
  onClose: function () {
    toggleBodyScroll(true);
  }
});

var carouselSlides = document.querySelectorAll('#pixstar-carousel .pixstar-slide');
for (var i = 0; i < carouselSlides.length; i++) {
  carouselSlides[i].addEventListener('click', function (event) {
    showSelection(event.target.getAttribute('id'), event.target.querySelector('img').getAttribute('src'), true)
  });
}

function getMomentId(elementId) {
  return elementId.split('-')[3];
}
function openLightbox() {
  //SweetAlert
  //toggleBodyScroll(false);
  // swal({
  //   buttons: false,
  //   closeOnClickOutside: false,
  //   closeOnEsc: false,
  //   content: document.querySelector('#pixstar-lightbox')
  // })


  // set content
  modal.setContent(document.getElementById('pixstar-lightbox'));
  modal.open();

}

function showSelection(id, src, shouldOpenLightbox) {
  // document.querySelector('#pixstar-lightbox-selection img').setAttribute('src', src);

  // Open lightbox if required
  if (shouldOpenLightbox) {
    openLightbox();
  }

  // Clear previuos selection
  var currentSelection = document.querySelector('.pixstar-ligtbox-selected');
  if (currentSelection) {
    currentSelection.classList.remove('pixstar-ligtbox-selected');
  }

  // Show selection
  var elSelection = document.querySelector('#pixstar-lightbox-selection div');
  var backgrounds = [
    'linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(255,255,255,0) 2%, rgba(255,255,255,0) 4%)',
    'linear-gradient(135deg, rgba(31,31,31,1) 0%, rgba(255,255,255,0) 30%)',
    'url(' + src + ')',
    '#000'
  ];
  elSelection.style.background = backgrounds.join(', ');
  elSelection.style.backgroundSize = 'contain';
  elSelection.style.backgroundRepeat = 'no-repeat';
  elSelection.style.backgroundPosition = '50% 50%';

  // Select propert thumbnail
  var elThumb = document.querySelector('#pixstar-moment-l-' + getMomentId(id));
  elThumb.classList.add('pixstar-ligtbox-selected')

  // Scroll to thumb
  setTimeout(function () {
    elThumb.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    })
  }, 100);

}

/* LIGHTBOX */


function toggleBodyScroll(enabled) {
  document.body.style.overflow = enabled ? 'auto' : 'hidden';
  // if (enabled) {
  //   document.body.removeEventListener('touchmove', function (e) {
  //     e.preventDefault();
  //   }, false);
  // } else {
  //   document.body.addEventListener('touchmove', function (e) {
  //     e.preventDefault();
  //   }, false);
  // }  
}



document.querySelector('#pixstar-lightbox-close').addEventListener('click', function() { 
  toggleBodyScroll(true);
  document.querySelector('.pixstar-ligtbox-selected').classList.remove('pixstar-ligtbox-selected');
  //swal.close();
  modal.close();
});

var lightboxSlides = document.querySelectorAll('#pixstar-lightbox .pixstar-slide');
for (var i = 0; i < lightboxSlides.length; i++) {
  lightboxSlides[i].addEventListener('click', function (event) {
    showSelection(event.target.getAttribute('id'), event.target.querySelector('img').getAttribute('src'), false)
  });
}