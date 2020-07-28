$(function () {
    $('.main-slide').wrapAll('<div class="slider slick-dotted" />');
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true
    });
    $('.testimonial').wrapAll('<div class="testimonial-slider slick-dotted" />');
    $('.testimonial-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        prevArrow: '<button type="button" class="prev-arrow slick-arrow"><i class="ft ft-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="next-arrow slick-arrow"><i class="ft ft-chevron-right"></i></button>'
    });
});