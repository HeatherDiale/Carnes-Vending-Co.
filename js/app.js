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
//
