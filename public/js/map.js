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
