$(document).ready(function() {
    $(window).scroll(function(e) {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance > 83){
            $(".top-bar, .nav_bar").css("background-color", "#006480");
        } else {
            $(".top-bar, .nav_bar").css("background", "rgba(230,230,250, .80)");
        }

    });
});
