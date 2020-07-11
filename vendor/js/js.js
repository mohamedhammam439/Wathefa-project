$(document).ready(function () {

  if ($(window).width() < 767) {
    // change functionality for smaller screens

    $('.autoplay').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      dotsData: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,

    });
  } else {
    // change functionality for larger screens

    $('.autoplay').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      dotsData: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,

    });
  }


  $('.single-item').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsData: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

});