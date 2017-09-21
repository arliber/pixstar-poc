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
  // Clear previuos selection
  var currentSelection = document.querySelector('.pixstar-ligtbox-selected');
  if (currentSelection) {
    currentSelection.classList.remove('pixstar-ligtbox-selected');
  }

  // Select proper thumbnail
  var elThumb = document.querySelector('#pixstar-moment-l-' + getMomentId(id));
  elThumb.classList.add('pixstar-ligtbox-selected');

  function nthElement(elStart, ignoreSelectors, n) {
    function matchAny(node, selectors) {
      for (var i = 0; node && i < selectors.length; i++) {
        if(node.getAttribute && node.getAttribute('id') === selectors[i]) {
          return true;
        }
      }
      return false;
    }

    var next = elStart;
    for(var i = 0; next && i < n; i++) {
      do {
        next = next.nextSibling;
      } while ((next && next.nodeType !== 1) || matchAny(next, ignoreSelectors));
    }
    return next;
  }


  // Open lightbox if required
  if (shouldOpenLightbox) {
    openLightbox();
    // Move info box(es)
    var elInfo = document.getElementById('pixstar-info');
    elThumb.parentNode.insertBefore(elInfo, nthElement(elThumb, ['pixstar-info', 'pixstar-info-widgets'], 1));

    // Move widgets
    var elWidgets = document.getElementById('pixstar-info-widgets');
    elInfo.parentNode.insertBefore(elWidgets, nthElement(elThumb, ['pixstar-info', 'pixstar-info-widgets'], 3));
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

  // Scroll to thumb
  setTimeout(function () {
    elThumb.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    })
  }, 100);

}

/* MODAL */


function toggleBodyScroll(enabled) {
  document.body.style.overflow = enabled ? 'auto' : 'hidden';
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