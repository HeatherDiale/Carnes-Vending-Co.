//Topbar fades with scroll

$(document).ready(function() {
    $(window).scroll(function(e) {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance > 83){
            // Remove opacity class
            $('.top-bar, .nav_bar').addClass('fully-opaque');
        } else {
            $('.top-bar, .nav_bar').removeClass('fully-opaque');
        }

    });
});

//Slides left and right taglines on About page

 $(document).ready(function() {
    $(window).scroll(function(e) {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance > 700) {
            //Bring in warm_message from left //
            $('.mom_pop_div').addClass('slide_left');
        }else{
            $('.mom_pop_div').removeClass('slide_left');
        }
    });
});

//Slides in the Hungry headline on homepage

 $(document).ready(function() {
    $(window).scroll(function(e) {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance > 300) {
            //Bring in warm_message from left //
            $('h1.hungry_headline').addClass('slide_left');
        }else{
            $('h1.hungry_headline').removeClass('slide_left');
        }
    });
});

