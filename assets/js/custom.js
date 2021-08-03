$(function(){
    $(".owl-carousel").each(function(){
        $(this).owlCarousel({
            items: 2,
            margin: 10,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            autoHeight:true,
            animateOut: 'fadeOut',
            loop: true,
            dots: false,
            // nav: false,
            // navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            responsive: {
                400 : {
                    items : 1,
                },
                // breakpoint from 768 up
                768 : {
                    items: 3,
                },
                991 : {
                    items: 6,
                }
            }
        });
    });
    $("#footer").load("footer.html");
});