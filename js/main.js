$('.mainSlide').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
});

$(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    console.log(sct);
    sct > 0 ? $('.header').addClass('on')
        : $('.header').removeClass('on');

    sct > 300 ? $('.toTop').fadeIn(1000)
        : $('.toTop').fadeOut()
});

$('.toTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 1000)
});

$('.mopen').on('click', function () {
    $('nav').toggleClass('on')
})
