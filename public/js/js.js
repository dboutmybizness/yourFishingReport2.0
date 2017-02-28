reportObj = new Object;

// Get user's location
(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            reportObj.position = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            //console.log(reportObj.position);
            $('.loader').hide();
            $('#mapWrapper, #mapNextBtn').fadeIn('slow');
            $('.page-header h1').text('There you are!');
            $('.page-header p').text('Now just click the map to add a marker in the desired location and click continue.');
            initMap();
        })
    }
})();

// Init Google map
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: reportObj.position,
        zoom: 12,
        scrollwheel: true,
        zoomControl: true,
        mapTypeId: 'terrain',
        streetViewControl: false,
    });
}

// Location error 
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation. Please use the map controls to place a marker on the desired location and then proceed.');
}

// User alert 
// type can be any Bootstrap alert class (warning, success, etc)
function userAlert(type, message) {
    //remove existing classes
    $('#userAlert').removeClass();
    $('#userAlert').addClass('alert-' + type + ' alert');
    $('#userAlert').text(message);
    $('#userAlert').fadeIn('slow').delay(5000).fadeOut('slow');
}
