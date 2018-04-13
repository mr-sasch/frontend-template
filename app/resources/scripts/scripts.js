// Адаптация шапки
// var item = document.getElementById('nav__nav-item-inner');
// var itemWidth = item.offsetWidth;
// item.style.width = itemWidth + 'px';

function navAdapt() {
  var navLogoHeight = document.querySelector('.nav__logo').offsetHeight;
  var navWrap = document.querySelector('.nav-wrap');
  var navHeight = navWrap.offsetHeight;
  if (navHeight > 80) {
    navWrap.style.justifyContent = 'center';
  } else {
    navWrap.style.justifyContent = 'space-between';
  };
}
navAdapt();

document.body.onresize = function() {
  navAdapt();
};
