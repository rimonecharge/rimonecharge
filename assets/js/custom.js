src="https://code.jquery.com/jquery-3.6.3.js"
    integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM="
    crossorigin="anonymous"
   
$(function () {
    $(".owl-carousel").each(function () {
        $(this).owlCarousel({
            items: 2,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            autoHeight: true,
            animateOut: 'fadeOut',
            loop: true,
            dots: false,
            // nav: false,
            // navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            responsive: {
                400: {
                    items: 1,
                },
                // breakpoint from 768 up
                768: {
                    items: 3,
                },
                991: {
                    items: 6,
                }
            }
        });
    });
    $("#footer").load("footer.html");
});
$(document).ready(function () {
    $('.menu-link').bigSlide();
});

// to stop image reloading upon refreshing
$(document).ready(function () {
    $("body").show();
});

 // Font Awesome Icon
src="https://kit.fontawesome.com/30f52323eb.js"

// Disable right click
document.addEventListener('contextmenu', event => event.preventDefault());

// For Toggler
// const mobile_nav = document.querySelector(".mobile-nav-btn");
// const nav_header = document.querySelector(".header");

// const toggleNavbar = () => {
//     nav_header.classList.toggle("active");
// };

// mobile_nav?.addEventListener('click', () => toggleNavbar());