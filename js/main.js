$(function () {

   $('.testi__coments-slider').slick({
      arrows: true,
      dots: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000
   });
   if (window.matchMedia("(max-width: 800px)").matches) {
      $('.gallery__items').slick({
         slidesToShow: 1,
         arrows: false,
         fade: true,
         autoplay: true,
         autoplaySpeed: 2000
      });
   }
});