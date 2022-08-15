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

var topbutton = {"top":document.getElementById("btn-top"),"contact":document.getElementById("btn-contact-fixed")}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
        topbutton.top.style.display = "block";
        topbutton.contact.style.display = "block";
    } else {
        topbutton.top.style.display = "none";
        topbutton.contact.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function clickMenu(x) {
    // console.log(x);
    x.classList.toggle("change");
}