// Allows only one marker to be added at a time
var markerFlag = false;
var marker;

// This event listener calls addMarker() when the map is clicked.
google.maps.event.addListener(map, 'click', function (event) {
    addMarker(event.latLng, map);
});

// Adds a marker to the map.
function addMarker(location, map) {
    // Only one marker per report
    if (!markerFlag) {
        markerFlag = true;
        // Add the marker at the clicked location, and add the next-available label
        // from the array of alphabetical characters.
        marker = new google.maps.Marker({
            position: location,
            //label: 'X',
            draggable: true,
            animation: google.maps.Animation.DROP,
            map: map
        });
        //getLocation();
        var lat = marker.getPosition().lat();
        var lng = marker.getPosition().lng();
        // Save position to reportObj
        reportObj.position = {
            'lat': lat,
            'lng': lng
        };
        console.log(reportObj.position);
    } else {
        userAlert('warning', "You can only add one marker per report.  However, you can drag the current marker to a new location.");
    }
}
