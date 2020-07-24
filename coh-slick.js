$(function () {
    $('.main-slide').wrapAll('<div class="slider slick-dotted" />');
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true
    });
});