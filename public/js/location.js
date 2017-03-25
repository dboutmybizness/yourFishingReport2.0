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
            $('.page-header p').text('Here are some reports we found near you.');
            initMap();
        })
    }
})();

// Location error 
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation. Please use the map controls to place a marker on the desired location and then proceed.');
}
