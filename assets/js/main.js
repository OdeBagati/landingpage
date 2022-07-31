$(document).ready(function() {
    $('#lightSlider').lightSlider({
        item:3,
        loop:false,
        isTouch:true,
        enableTouch:true,
        enableDrag:true,
        slideMove:3,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:2,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });  
});

$(document).ready(function(){
    $('.sidenav').sidenav();
});