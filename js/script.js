$(document).ready(function() {
	var form = $('#form');
	var FName = $('#FName');
	var LName = $('#LName');
	var email = $('#email');
	var password = $('#password');
	var password2 = $('#password2');
	
	$('.email').hide();
		
 });

$('#LName').keydown(function(event) {
	var FName = $('#FName').val();
	var LName = $('#LName').val();
	// if (FName != '' && LName != '') {
		$('.email').show();
	// }
	
});

$('#FName').keydown(function(event) {
	var FName = $('#FName').val();
	var LName = $('LName').val();
	// if (FName == '' && LName == '') {
		$('.email').hide();
	// }
});

