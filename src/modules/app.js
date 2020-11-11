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
