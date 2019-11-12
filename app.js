const burger = document.querySelector('[mobile-menu-btn-js]');
const headerBar = document.querySelector('[header-animate-js]');
const intro = document.querySelector('[left-animate-js]');
const blockGallery = document.querySelector('[right-animate-js]');
const blockAbout = document.querySelector('[animate-halfblock-lays-js]');
const blockMap = document.querySelector('[animate-halfblock-map-js]');
const header = document.querySelector('[data-js-dir]');
const close = document.querySelector('[header-btn-close]');
let heightHeader = header.offsetHeight / 1.1;
let value = window.pageYOffset;



const closeMenu = () => {
  headerBar.classList.toggle('active');
}


window.addEventListener('resize', () => {
	heightHeader = header.offsetHeight / 1.1;
});


window.addEventListener('scroll',  () => {
  if ((window.pageYOffset > value + 50) && (window.pageYOffset > heightHeader)) {
    header.setAttribute('data-js-dir', 'down')
    headerBar.setAttribute('data-js-dir', 'down');
    value = window.pageYOffset;
    if (headerBar.className.includes('active')) {
      closeMenu();
    }
  } else if (window.pageYOffset < value) {
    header.setAttribute('data-js-dir', 'up')
    headerBar.setAttribute('data-js-dir', 'up');
    value = window.pageYOffset;
  }
});


close.onclick = () => {
  closeMenu();
};


burger.onclick = () => {
  closeMenu();
}


window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});


setTimeout(() => {
  window.scrollTo(0, 1);
}, 1);


if (document.body.offsetWidth > 640) {
	let posTop;
	let flag = false;
  window.addEventListener('scroll',  () => {
       if (!flag) {
         posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
         posTop = posTop + window.innerHeight - intro.getBoundingClientRect().top * 2;
         if (posTop > intro.getBoundingClientRect().top) {
           intro.setAttribute('left-animate-js', 'active');
         }
         if (posTop > blockGallery.getBoundingClientRect().top) {
           blockGallery.setAttribute('right-animate-js', 'active');
         }
         if (posTop / 2 > blockAbout.getBoundingClientRect().top) {
          blockAbout.setAttribute('animate-halfblock-lays-js', 'active');
         }
         if (posTop / 2 > blockMap.getBoundingClientRect().bottom) {
           blockMap.setAttribute('animate-halfblock-map-js', 'active');
           flag = true;
         }
       }
     }
  );
}


intro.style.opacity = 1;
document.querySelector('body').style.backgroundColor = 'white';

