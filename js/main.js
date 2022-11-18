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
    $(this).toggleClass('on');
    $('nav').toggleClass('on')
});

$('nav>ul>li>a').on('click', function (event) {
    var sm = $(this).next().is('.smenu');
    sm && event.preventDefault();
    if ($(window).width() < 769) {
        $('.smenu').stop().slideUp();
        $(this).next().stop().slideDown();
    }

});

$(window).on('resize', function () {
    $('.smenu').removeAttr('style')
})
