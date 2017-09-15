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

function showSelection(id, src) {
  document.querySelector('#pixstar-lightbox-selection img').setAttribute('src', src)
  swal({
    buttons: false,
    content: document.querySelector('#pixstar-lightbox')
  })
}

document.querySelector('#pixstar-lightbox-close').addEventListener('click', function() { swal.close() });