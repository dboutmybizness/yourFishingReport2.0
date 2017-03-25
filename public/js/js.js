reportObj = new Object;

// User alert 
// type can be any Bootstrap alert class (warning, success, etc)
function userAlert(type, message) {
    //remove existing classes
    $('#userAlert').removeClass();
    $('#userAlert').addClass('alert-' + type + ' alert');
    $('#userAlert').text(message);
    $('#userAlert').fadeIn('slow').delay(5000).fadeOut('slow');
}
