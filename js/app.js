//Topbar fades with scroll

$(document).ready(function() {
    $(window).scroll(function(e) {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance > 83){
            // Remove opacity class
            $('.top-bar, .nav_bar').addClass('fully-opaque');
        }else{
            $('.top-bar, .nav_bar').removeClass('fully-opaque');
        }

    });
});

//Slides left and right taglines on About page

 $(document).ready(function() {
    $(window).scroll(function(e) {
        var scrollDistance = $(window).scrollTop();

        if (scrollDistance > 500) {
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

// Code for Popovers on timeline


$(document).ready(function(){
    //$('[data-toggle="popover"]').popover();

});

$(document).ready(function(){
    //$('[data-toggle="popover_2"]').popover();

});

// Google Map Function

function plotMarkers(locations, map) {
    var previousMarker = null;
    var markers = [];
    $(locations).each(function(index, location) {
        var marker = new google.maps.Marker({
            position: location.position,
            animation: google.maps.Animation.DROP
        });

        if (previousMarker) {
            previousMarker.next = marker;
        }

        previousMarker = marker;

        marker.addListener('click', function() {
            marker.setAnimation(null);
            if (marker.next !== undefined) {
                marker.next.setAnimation(google.maps.Animation.BOUNCE);
            } else {
                markers[0].setAnimation(google.maps.Animation.BOUNCE);
            }
        });
        markers.push(marker);

        // Figure out which marker should be next
        // Add click event to make the next one bounce
        // Add click event to draw to the next one
        // Add simultaneous click event to open infowindow

        var infowindow = new google.maps.InfoWindow({
            vcontent:"Hello World!"
        });

        markers[0].setAnimation(google.maps.Animation.BOUNCE);
        marker.setMap(map);
    });
}

function initialize() {
  var locations = [
      {
          position: new google.maps.LatLng(37.9700,-85.7000),
          message: "kasdjlaskdja",
          label: "Bulitt",
      },
      {
          position: new google.maps.LatLng(37.4700,-85.8400),
          message: "kasdjlaskdja",
          label: "Ohio",
      },
      {
          position: new google.maps.LatLng(37.0722,-85.6275),
          message: "kasdjlaskdja",
          label: "Paducah",
      },
        {
          position: new google.maps.LatLng(37.9000,-85.4900),
          message: "kasdjlaskdja",
          label: "Christian",
      },
        {
          position: new google.maps.LatLng(36.7400,-86.5800),
          message: "kasdjlaskdja",
          label: "Simpson",
      },
        {
          position: new google.maps.LatLng(37.2900,-85.8900),
          message: "kasdjlaskdja",
          label: "Hart",
      },
        {
          position: new google.maps.LatLng(38.4000,-85.4400),
          message: "kasdjlaskdja",
          label: "Oldham",
      },
        {
          position: new google.maps.LatLng(38.9933,-84.6425),
          message: "kasdjlaskdja",
          label: "Florence",
      },
        {
          position: new google.maps.LatLng(37.9947,-84.1842),
          message: "kasdjlaskdja",
          label: "Winchester",
      },
        {
          position: new google.maps.LatLng(38.1900,-83.4200),
          message: "kasdjlaskdja",
          label: "Rowan",
      },
        {
          position: new google.maps.LatLng(37.7951,-83.7041),
          message: "kasdjlaskdja",
          label: "Slade",
      },
        {
          position: new google.maps.LatLng(38.3300,-83.0500),
          message: "kasdjlaskdja",
          label: "Carter",
      },
        {
          position: new google.maps.LatLng(36.7600,-84.1500),
          message: "kasdjlaskdja",
          label: "Whitley",
      },
        {
          position: new google.maps.LatLng(36.3011,-88.3139),
          message: "kasdjlaskdja",
          label: "Paris, TN",
      },
        {
          position: new google.maps.LatLng(36.4100,-84.1500),
          message: "kasdjlaskdja",
          label: "Campbell, TN",
      },
        {
          position: new google.maps.LatLng(36.5300,-86.8700),
          message: "kasdjlaskdja",
          label: "Robertson, TN",
      },
        {
          position: new google.maps.LatLng(36.5000,-87.3800),
          message: "kasdjlaskdja",
          label: "Montgomery, TN",
      },
      {
          position: new google.maps.LatLng(35.3900,-85.7200),
          message: "kasdjlaskdja",
          label: "Grundy, TN",
      },
  ];

  var mapProp = {
    center:new google.maps.LatLng(37.2900,-85.8900),
    zoom:7,
    disableDefaultUI:true,
    scrollwheel: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  plotMarkers(locations, map);

// Adding Location Markers Based on Lat / Long


//infowindow.open(map,marker);

// Google Map will load after everything else on pag
}
google.maps.event.addDomListener(window, 'load', initialize);

// Stylized Overlay for Google Map (blue/ligh tint)

[{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#b4d4e1"},{"visibility":"on"}]}]


// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});
