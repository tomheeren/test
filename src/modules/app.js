// This is the global JS file that will be accessible from any component

// Header
const headerLength = document.querySelectorAll('.header-hamburger');

if (headerLength.length > 0) {
  let x = true;
  const hamburger = headerLength[0];
  const headerNav = document.querySelector('.header-nav');
  const body = document.querySelector('body');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    // headerNav.classList.toggle('is-active');
    body.classList.toggle('is-active');

    if (x) {
      headerNav.classList.add('menu-open');
      headerNav.classList.remove('menu-closed');
      x = false;
    } else {
      headerNav.classList.remove('menu-open');
      headerNav.classList.add('menu-closed');
      x = true;
    }
  });
}

// Tab
const tablinksLength = document.querySelectorAll('.tablinks');

if (tablinksLength.length > 0) {
  const tablinks = document.querySelectorAll('.tablinks');
  const tablinkscontent = document.querySelectorAll('.tabcontent');

  tablinks[0].classList.add('active');
  tablinkscontent[0].style.display = 'block';

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].addEventListener('click', function () {
      const tablink = this.dataset.tab;

      for (let i = 0; i < tablinkscontent.length; i++) {
        if (tablinkscontent[i].dataset.tabcontent === tablink) {
          tablinkscontent[i].style.display = 'block';
          tablinks[i].classList.add('active');
        } else {
          tablinkscontent[i].style.display = 'none';
          tablinks[i].classList.remove('active');
        }
      }
    });
  }
}

// accordion
const accordionLength = document.querySelectorAll('.accordion');

if (accordionLength.length > 0) {
  const acc = document.getElementsByClassName('accordion');

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  }
}

// AOS Animate on scroll library
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

// hero Scroll down animation click handler
const heroLength = document.querySelectorAll('.hero');

if (heroLength.length > 0) {
  $(() => {
    $('.hero-scroll-down').click(() => {
      $('html, body').animate({ scrollTop: $('.hero-scroll-anchor').offset().top }, 'slow');
      return false;
    });
  });

  const images = document.querySelector('.hero .img-wrap img');
  new simpleParallax(images, {
    delay: 0,
    orientation: 'down',
    scale: 1.3,
    overflow: true,
  });
}


// Jess Design slider
const jessSliderLength = document.querySelectorAll('.jess-slider');

if (jessSliderLength.length > 0) {
  for (let i = 0; i < jessSliderLength.length; i++) {
    const element = jessSliderLength[i];
    const sliderJess = element.querySelector('.js-carousel');

    const flkty = new Flickity(sliderJess, {
      // options
      cellAlign: 'left',
      wrapAround: true,
      pageDots: false,
      prevNextButtons: false,
      imagesLoaded: true,
    });

    const previousButton = element.querySelector('.js-button--previous');
    previousButton.addEventListener('click', () => {
      flkty.previous();
    });

    const nextButton = element.querySelector('.js-button--next');
    nextButton.addEventListener('click', () => {
      flkty.next();
    });
  }
}

// collectie overzicht
const headerBackgroundHoverImages = document.querySelectorAll('.navigation-links');

if (headerBackgroundHoverImages.length > 0) {
  const links = headerBackgroundHoverImages[0].querySelectorAll('li');
  const hoverImages = document.querySelector('.hover-images');

  for (let i = 0; i < links.length; i++) {
    const element = links[i];
    const img = element.querySelector('.navBackImage');
    hoverImages.appendChild(img);
  }

  const hoverLinks = document.querySelectorAll('.navigation-links li');

  for (let x = 0; x < hoverLinks.length; x++) {
    hoverLinks[x].addEventListener('mouseover', () => {
      hoverImages.querySelectorAll('.navBackImage')[x].classList.add('is-active');
    });

    hoverLinks[x].addEventListener('mouseout', () => {
      hoverImages.querySelectorAll('.navBackImage')[x].classList.remove('is-active');
    });
  }
}


// Collectie overzicht dropdown (dropdown-menu)
const dropdownMenuLength = document.querySelectorAll('.dropdown-menu');

if (dropdownMenuLength.length > 0) {
  const dropbtn = dropdownMenuLength[0].querySelector('.dropbtn');

  dropbtn.addEventListener('click', () => {
    dropdownMenuLength[0].classList.toggle('is-active');
  });
}


// Photoswipe data img size - img gallery count product
const pdpGalleryLength = document.querySelectorAll('.pdp-gallery');

if (pdpGalleryLength.length > 0) {
  for (let i = 0; i < pdpGalleryLength.length; i++) {
    const element = pdpGalleryLength[i];

    const pdpMedia = element.querySelectorAll('.pdp-media');
    const pdpCollageGrid = document.querySelector('.pdp-collage-grid');

    console.log(pdpMedia.length);
    if (pdpMedia.length > 2) {
      pdpCollageGrid.classList.add('moreMobile');

      pdpMedia[1].insertAdjacentHTML('beforeend', `<span class="pdpOverlay">+${pdpMedia.length - 1}</span>`);
    }

    if (pdpMedia.length > 4) {
      pdpCollageGrid.classList.add('moreDesktop');

      pdpMedia[3].insertAdjacentHTML('beforeend', `<span class="pdpOverlay">+${pdpMedia.length - 3}</span>`);
    }

    for (let x = 0; x < pdpMedia.length; x++) {
      const media = pdpMedia[x];
      const mediaAnchor = media.querySelector('a');
      const mediaImg = media.querySelector('img');

      $(() => {
        mediaImgSize();
      });

      mediaImg.addEventListener('load', () => {
        mediaImgSize();
      });

      function mediaImgSize() {
        const mediaImgHeight = mediaImg.naturalHeight;
        const mediaImgWidth = mediaImg.naturalWidth;

        mediaAnchor.dataset.size = `${mediaImgWidth}x${mediaImgHeight}`;
      }
    }


    function mediaSizerParent(media) {
      const mediaAnchor = media.querySelector('a');
      const mediaImg = media.querySelector('img');

      $(() => {
        mediaImgSize();
      });

      mediaImg.addEventListener('load', () => {
        mediaImgSize();
      });

      function mediaImgSize() {
        const mediaImgHeight = mediaImg.naturalHeight;
        const mediaImgWidth = mediaImg.naturalWidth;

        mediaAnchor.dataset.size = `${mediaImgWidth}x${mediaImgHeight}`;
      }
    }
  }
}

// Photoswipe
const initPhotoSwipeFromDOM = function (gallerySelector) {
  // parse slide data (url, title, size ...) from DOM elements
  // (children of gallerySelector)
  const parseThumbnailElements = function (el) {
    const thumbElements = el.childNodes;
    const numNodes = thumbElements.length;
    const items = [];
    let figureEl;
    let linkEl;
    let size;
    let item;

    for (let i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i]; // <figure> element

      // include only element nodes
      if (figureEl.nodeType !== 1) {
        continue;
      }

      linkEl = figureEl.children[0]; // <a> element

      size = linkEl.getAttribute('data-size').split('x');

      // create slide object
      item = {
        src: linkEl.getAttribute('href'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10),
      };


      if (figureEl.children.length > 1) {
        // <figcaption> content
        item.title = figureEl.children[1].innerHTML;
      }

      if (linkEl.children.length > 0) {
        // <img> thumbnail element, retrieving thumbnail url
        item.msrc = linkEl.children[0].getAttribute('src');
      }

      item.el = figureEl; // save link to element for getThumbBoundsFn
      items.push(item);
    }

    return items;
  };

  // find nearest parent element
  const closest = function closest(el, fn) {
    return el && (fn(el) ? el : closest(el.parentNode, fn));
  };

  // triggers when user clicks on thumbnail
  const onThumbnailsClick = function (e) {
    e = e || window.event;
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    const eTarget = e.target || e.srcElement;

    // find root element of slide
    const clickedListItem = closest(eTarget, el => (el.tagName && el.tagName.toUpperCase() === 'FIGURE'));

    if (!clickedListItem) {
      return;
    }

    // find index of clicked item by looping through all child nodes
    // alternatively, you may define index via data- attribute
    const clickedGallery = clickedListItem.parentNode;
    const { childNodes } = clickedListItem.parentNode;
    const numChildNodes = childNodes.length;
    let nodeIndex = 0;
    let index;

    for (let i = 0; i < numChildNodes; i++) {
      if (childNodes[i].nodeType !== 1) {
        continue;
      }

      if (childNodes[i] === clickedListItem) {
        index = nodeIndex;
        break;
      }
      nodeIndex++;
    }


    if (index >= 0) {
      // open PhotoSwipe if valid index found
      openPhotoSwipe(index, clickedGallery);
    }
    return false;
  };

  // parse picture index and gallery index from URL (#&pid=1&gid=2)
  const photoswipeParseHash = function () {
    const hash = window.location.hash.substring(1);
    const params = {};

    if (hash.length < 5) {
      return params;
    }

    const vars = hash.split('&');
    for (let i = 0; i < vars.length; i++) {
      if (!vars[i]) {
        continue;
      }
      const pair = vars[i].split('=');
      if (pair.length < 2) {
        continue;
      }
      params[pair[0]] = pair[1];
    }

    if (params.gid) {
      params.gid = parseInt(params.gid, 10);
    }

    return params;
  };

  var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
    const pswpElement = document.querySelectorAll('.pswp')[0];
    let gallery;
    let options;
    let items;

    items = parseThumbnailElements(galleryElement);

    // define options (if needed)
    options = {

      // define gallery index (for URL)
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),

      getThumbBoundsFn(index) {
        // See Options -> getThumbBoundsFn section of documentation for more info
        const thumbnail = items[index].el.getElementsByTagName('img')[0]; // find thumbnail
        const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
        const rect = thumbnail.getBoundingClientRect();

        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
      },

    };

    // PhotoSwipe opened from URL
    if (fromURL) {
      if (options.galleryPIDs) {
        // parse real index when custom PIDs are used
        // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
        for (let j = 0; j < items.length; j++) {
          if (items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        // in URL indexes start from 1
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }

    // exit if index not found
    if (isNaN(options.index)) {
      return;
    }

    if (disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  // loop through all gallery elements and bind events
  const galleryElements = document.querySelectorAll(gallerySelector);

  for (let i = 0, l = galleryElements.length; i < l; i++) {
    galleryElements[i].setAttribute('data-pswp-uid', i + 1);
    galleryElements[i].onclick = onThumbnailsClick;
  }

  // Parse URL and open gallery if it contains #&pid=3&gid=1
  const hashData = photoswipeParseHash();
  if (hashData.pid && hashData.gid) {
    openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
  }
};

// execute above function
initPhotoSwipeFromDOM('.pdp-gallery');
