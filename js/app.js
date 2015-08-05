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
