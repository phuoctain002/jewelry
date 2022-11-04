$(document).ready(function () {
    $('.image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(document).ready(function () {
    $('.product-slider.new').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev-products slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next-products slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});

$(document).ready(function () {
    $('.product-slider.hot').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev-products slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next-products slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(document).ready(function () {
    $('.product-slider.gem').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev-products slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next-products slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(document).ready(function () {
    $('.product-slider.fengshui').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev-products slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next-products slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
