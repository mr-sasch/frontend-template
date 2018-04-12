// Адаптация шапки
var headerLogoHeight = document.querySelector('.header__logo').offsetHeight;
var headerWrap = document.querySelector('.header-wrap');

document.body.onresize = function() {
  var headerHeight = headerWrap.offsetHeight;
  console.log(headerHeight);
  if (headerHeight > 80) {
    headerWrap.style.justifyContent = 'center';
  } else {
    headerWrap.style.justifyContent = 'space-between';
  };
};
