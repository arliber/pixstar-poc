var data = [{
  momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196255/13_l6v97m.jpg',
    userName: 'Nicole Mine',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198848/profiles/ben-blennerhassett-302015.jpg'
  },
  {
    momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196258/12_vci9tb.jpg',
    userName: 'Nicole Mine',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198848/profiles/ben-blennerhassett-302015.jpg'
  },
  {
    momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196264/11_wmmqtx.jpg',
    userName: 'Ken White',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198812/profiles/ryan-holloway-287655.jpg'
  },
  {
    momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196249/10_wbywj3.jpg',
    userName: 'Ken White',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198812/profiles/ryan-holloway-287655.jpg'
  },
  {
    momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196232/9_tcbtik.jpg',
    userName: 'Ken White',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198812/profiles/ryan-holloway-287655.jpg'
  },
  {
    momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196253/8_ygywrv.jpg',
    userName: 'Kim Lavander',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198723/profiles/joe-gardner-149699.jpg'
  },
  {
    momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196192/7_h6sjdm.jpg',
    userName: 'Kim Lavander',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198723/profiles/joe-gardner-149699.jpg'
  },
  {
    momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196182/6_rar1ny.jpg',
    userName: 'Kim Lavander',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198723/profiles/joe-gardner-149699.jpg'
  },
  {
    momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196253/5_g2qoyp.jpg',
    userName: 'Dan Harris',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198773/profiles/alex-boyd-260339.jpg'
  },
  {
    momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196211/4_ubzbpf.jpg',
    userName: 'Dan Harris',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198773/profiles/alex-boyd-260339.jpg'
  },
  {
    momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196215/3_iuhbmd.jpg',
    userName: 'Dan Harris',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198773/profiles/alex-boyd-260339.jpg'
  },
  {
    momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196214/2_lgxh7i.jpg',
    userName: 'Dan Harris',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198773/profiles/alex-boyd-260339.jpg'
  },
  {
    momentUrl: 'https://res.cloudinary.com/pixstar/image/upload/v1507196214/1_norz8s.jpg',
    userName: 'Nicole Mine',
    userProfile: 'http://res.cloudinary.com/pixstar/image/upload/w_100,h_100,c_thumb,g_face/v1507198848/profiles/ben-blennerhassett-302015.jpg'
  }
];

function createSlide(momentData, index) {
  // Credit
  var credit = document.createElement('div')
  credit.classList = ['pixstar-credit'];
  var profileImage = document.createElement('img');
  profileImage.setAttribute('src', momentData.userProfile);
  credit.appendChild(profileImage);
  credit.appendChild(document.createTextNode(momentData.userName));

  // Moment thumb
  var momentThumb = document.createElement('div')
  momentThumb.classList = ['pixstar-slide'];
  momentThumb.setAttribute('id', 'pixstar-moment-c-' + index);
  var thumb = document.createElement('img');
  thumb.setAttribute('src', momentData.momentUrl.replace('upload/', 'upload/w_800,h_600,c_fill/'));
  momentThumb.appendChild(thumb);
  momentThumb.appendChild(credit);

  // Moment
  var moment = document.createElement('div')
  moment.classList = ['pixstar-slide'];
  moment.setAttribute('id', 'pixstar-moment-l-' + index);
  var image = document.createElement('img');
  image.setAttribute('src', momentData.momentUrl);
  moment.appendChild(image);
  moment.appendChild(credit.cloneNode(true));

  // Add to DOM
  document.getElementById('pixstar-carousel').appendChild(momentThumb);
  document.getElementById('pixstar-lightbox-scroll').appendChild(moment);
}

for(var i = 0; i < data.length; i++) {
  createSlide(data[i], i);
}

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

// Next/Prev events
document.querySelector('#pixstar-carousel-prev').addEventListener('click', function() {
  pixstarCarousel.prev()
});
document.querySelector('#pixstar-carousel-next').addEventListener('click', function() {
  pixstarCarousel.next()
});

// Carousle slide events
var carouselSlides = document.querySelectorAll('#pixstar-carousel .pixstar-slide');
for (var i = 0; i < carouselSlides.length; i++) {
  carouselSlides[i].addEventListener('click', function (event) {
    showSelection(event.target.getAttribute('id'), event.target.querySelector('img').getAttribute('src'), true)
  });
}

/* MODAL */
var isModalOpen = false;
var modal = new tingle.modal({
  footer: false,
  stickyFooter: false,
  closeMethods: ['overlay', 'escape'], /*button*/
  closeLabel: 'Close', // Disabled in CSS
  onOpen: function () {
    toggleBodyScroll(false);
    isModalOpen = true;
  },
  onClose: function () {
    toggleBodyScroll(true);
    isModalOpen = false;
  }
});
modal.setContent(document.getElementById('pixstar-lightbox'));

// Relocate selection info container on resize
window.addEventListener('resize', function (event) {
  if (isModalOpen) {
    adjustElementSizebyBackgroundSize('#pixstar-lightbox-selection div', '#selection-info');
  }
});

// Modal close event 
document.querySelector('#pixstar-lightbox-close').addEventListener('click', function () {
  toggleBodyScroll(true);
  document.querySelector('.pixstar-ligtbox-selected').classList.remove('pixstar-ligtbox-selected');
  modal.close();
});

// Modal slide events
var lightboxSlides = document.querySelectorAll('#pixstar-lightbox .pixstar-slide');
for (var i = 0; i < lightboxSlides.length; i++) {
  lightboxSlides[i].addEventListener('click', function (event) {
    showSelection(event.target.getAttribute('id'), event.target.querySelector('img').getAttribute('src'), false);
  });
}

/* UTILS */
function getMomentId(elementId) {
  return Number(elementId.split('-')[3]);
}

function toggleBodyScroll(enabled) {
  document.body.style.overflow = enabled ? 'auto' : 'hidden';
}

function adjustElementSizebyBackgroundSize(containerSelector, destinationSelector) {
  // Container
  var elContainer = document.querySelector(containerSelector);
  var containerWidth = elContainer.offsetWidth;
  var containerHeight = elContainer.offsetHeight;

  // Image
  var img = new Image;
  img.src = elContainer.style.backgroundImage.match(/url\(["|']?([^"']*)["|']?\)/)[1]; // might need .replace(/["|']/g, "") too
  img.addEventListener('load', function () { 
    var imageWidth = img.width;
    var imageHeight = img.height;

    // Ratios
    var imageRatio = imageWidth / imageHeight;
    var containerRatio = containerWidth / containerHeight;

    // FInd new width/height
    var newWidth, newHeight;
    if (imageRatio > containerRatio) {
      newWidth = containerWidth;
      newHeight = imageHeight / imageWidth * newWidth;
    } else {
      newHeight = containerHeight;
      newWidth = imageWidth / imageHeight * newHeight;
    }

    var elDestination = document.querySelector(destinationSelector);
    elDestination.style.width = Math.ceil(newWidth) + 'px';
    elDestination.style.height = Math.ceil(newHeight) + 'px';
  }, false);
}

function skipElements(elStart, ignoreSelectors, count) {
  function matchAny(node, selectors) {
    for (var i = 0; node && i < selectors.length; i++) {
      if (node.getAttribute && node.getAttribute('id') === selectors[i]) {
        return true;
      }
    }
    return false;
  }

  var next = elStart;
  for (var i = 0; next && i < count; i++) {
    do {
      next = next.nextSibling;
    } while ((next && next.nodeType !== 1) || matchAny(next, ignoreSelectors));
  }
  return next;
}

function showSelection(id, src, shouldOpenLightbox) {
  var momentId = getMomentId(id);

  // Clear previuos selection
  var currentSelection = document.querySelector('.pixstar-ligtbox-selected');
  if (currentSelection) {
    currentSelection.classList.remove('pixstar-ligtbox-selected');
  }

  // Select proper thumbnail
  var elThumb = document.querySelector('#pixstar-moment-l-' + momentId);
  elThumb.classList.add('pixstar-ligtbox-selected');

  // Open lightbox if required
  if (shouldOpenLightbox) {
    modal.open();

    // Move info box(es)
    var elInfo = document.getElementById('pixstar-info');
    elThumb.parentNode.insertBefore(elInfo, skipElements(elThumb, ['pixstar-info', 'pixstar-info-widgets'], 1));

    // Move widget(s)
    var elWidgets = document.getElementById('pixstar-info-widgets');
    elInfo.parentNode.insertBefore(elWidgets, skipElements(elThumb, ['pixstar-info', 'pixstar-info-widgets'], 3));
  }

  // Show selection
  var elSelection = document.querySelector('#pixstar-lightbox-selection div');
  var backgrounds = [
    //'linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(255,255,255,0) 2%, rgba(255,255,255,0) 4%)',
    //'linear-gradient(135deg, rgba(31,31,31,1) 0%, rgba(31,31,31,0) 30%)',
    'url(' + src + ')',
    '#000'
  ];
  elSelection.style.background = backgrounds.join(', ');
  elSelection.style.backgroundSize = 'contain';
  elSelection.style.backgroundRepeat = 'no-repeat';
  elSelection.style.backgroundPosition = '50% 50%';

  // Handle credit
  var credit = document.querySelector('.pixstar-credit-2');
  while (credit.firstChild) { // Remove all elements
    credit.removeChild(credit.firstChild);
  }
  var profileImage = document.createElement('img');
  profileImage.setAttribute('src', data[momentId].userProfile);
  credit.appendChild(profileImage);
  credit.appendChild(document.createTextNode(data[momentId].userName));
  adjustElementSizebyBackgroundSize('#pixstar-lightbox-selection div', '#selection-info');

  // Scroll to thumb
  setTimeout(function () {
    elThumb.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    })
  }, 100);

}