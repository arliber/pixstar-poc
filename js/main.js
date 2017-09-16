var pixstarCarousel = new Siema({
  selector: '#pixstar-carousel',
  duration: 200,
  easing: 'ease-out',
  perPage: {
    768: 2,
    1024: 3,
  },
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: true,
  onInit: function() { },
  onChange: function() { },
});

setInterval(function() { pixstarCarousel.next() } , 3000);

document.querySelector('#pixstar-carousel-prev').addEventListener('click', () => pixstarCarousel.prev());
document.querySelector('#pixstar-carousel-next').addEventListener('click', () => pixstarCarousel.next());

var allSlides = document.querySelectorAll('.pixstar-slide');
for (var i = 0; i < allSlides.length; i++) {
  allSlides[i].addEventListener('click', function (event) {
    showSelection(event.target.getAttribute('data-id'), event.target.querySelector('img').getAttribute('src'))
  });
}

function toggleBodyScroll(enabled) {
  document.body.style.overflow = enabled ? 'auto' : 'hidden';
}

function showSelection(id, src) {
  document.querySelector('#pixstar-lightbox-selection img').setAttribute('src', src);
  // var elSelection = document.querySelector('#pixstar-lightbox-selection');
  // var backgrounds = [
  //   ' linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(255,255,255,0) 2%, rgba(255,255,255,0) 4%)',
  //   'linear-gradient(135deg, rgba(31,31,31,1) 0%, rgba(255,255,255,0) 30%)',
  //   'url(' + src + ')'
  // ];
  // elSelection.style.background = backgrounds.join(', ');
  // elSelection.style.backgroundSize = 'cover';
  // elSelection.style.backgroundRepeat = 'no-repeat';
  // elSelection.style.backgroundPosition = '50% 50%';
  toggleBodyScroll(false);
  swal({
    buttons: false,
    closeOnClickOutside: false,
    closeOnEsc: false,
    content: document.querySelector('#pixstar-lightbox')
  })
}

document.querySelector('#pixstar-lightbox-close').addEventListener('click', function() { 
  toggleBodyScroll(true);
  swal.close();
});