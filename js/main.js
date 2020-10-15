$(document).ready(function() {
	$('#chci').hide();
	$('#exci').hide();
	$('#chci2').hide();
	$('#exci2').hide();
	$('.email').hide();
	$('#chci3').hide();
	$('#exci3').hide();
	$('span').hide();
	$('small').hide();
	$('#chci4').hide();
	$('#exci4').hide();
	$('#chci5').hide();
	$('#exci5').hide();
	// $('#smallEmail').hide();


	// var FName_err = true;
	// var LName_err = true;
	// var email_err = true;
	// var phone_err = true;
	// var pass_err = true;
	// var pass2_err = true;

	$('#FName').keyup(function(){
		FName_check();
		emailID();
	});
	function FName_check(){
		var FName_val = $('#FName').val();
		if (FName_val.length == '') {
			$('.FName > input').css('border-color', 'red');
			$('#small1').show();
			$('#small1').html("Cannot be Empty");
			$('#chci').hide();
			$('#exci').show();
			$('#exci').css('color', 'red');
			$('#small1').css('color', 'red');
			// FName_err = false;
			return false;
		}else if ((FName_val.length < 3) || (FName_val.length > 8)){
			$('.FName > input').css('border-color', 'orange');
			$('#small1').show();
			$('#exci').show();
			$('#chci').hide();
			$('#exci').css('color', 'orange');
			$('#small1').html("Oops! must be between 3 and 8");
			$('#small1').css('color', 'red');
			// FName_err = false;
		}
		else{
			$('.FName > input').css('border-color', 'green');
			$('#small1').show();
			$('#small1').html("Verified");
			$('#small1').css('color', 'green');
			$('#exci').hide();
			$('#chci').show();
			$('#chci').css('color', 'green');
			return true;
		}
	}

	$('#LName').keyup(function(){
		LName_check();
		emailID();
	});
	function LName_check(){
		var LName_val = $('#LName').val();
		if (LName_val.length == '') {
			$('.LName > input').css('border-color', 'red');
			$('#small2').show();
			$('#small2').html("Cannot be Empty");
			$('#chci2').hide();
			$('#exci2').show();
			$('#exci2').css('color', 'red');
			$('#small2').css('color', 'red');
			// LName_err = false;
			return false;
		}else if ((LName_val.length < 3) || (LName_val.length > 8)){
			$('.LName > input').css('border-color', 'orange');
			$('#small2').show();
			$('#small2').html("Oops! must be between 3 and 8");
			$('#exci2').show();
			$('#chci2').hide();
			$('#exci2').css('color', 'orange');
			$('#small2').css('color', 'red');
			// LName_err = false;
		}
		else{

			$('.LName > input').css('border-color', 'green');
			$('#small2').show();
			$('#small2').html("Verified");
			$('#small2').css('color', 'green');
			$('#exci2').hide();
			$('#chci2').show();
			$('#chci2').css('color', 'green');

			return true;
		}
	}

	function emailID(){
		var FName_val = $('#FName').val();
		var a = FName_val.length == "" || (FName_val.length < 3) || (FName_val.length > 8) ?false:true;
		var LName_val = $('#LName').val();
		var b = LName_val.length == "" || (LName_val.length < 3) || (LName_val.length > 8) ?false:true;
		console.log(a,b);
		if (a && b) {
			$('.email').show();
		}
		else{
			$('.email').hide();
		}
	}	



	$('#password').keyup(function(){
		passwordCheck();
		
	});
	function passwordCheck(){
		var Password_str = $('#password').val();
		if (Password_str.length == '') {
			$('#password').css('border-color', 'red');
			$('.i2 > small').show();
			$('.i2 > small').html("Password cannot be empty.");
			$('#chci4').hide();
			$('#exci4').show();
			$('#exci4').css('color', 'red');
			$('.i2 > small').css('color', 'red');
			return false;
		}else if (Password_str.length < 5){
			$('#password').css('border-color', 'orange');
			$('.i2 > small').show();
			$('.i2 > small').html("Oops! It's a Weak Password ");
			$('#exci4').show();
			$('#chci4').hide();
			$('#exci4').css('color', 'orange');
			$('.i2 > small').css('color', 'red');
		}
		else{
			$('#password').css('border-color', 'green');
			$('.i2 > small').show();
			$('.i2 > small').html("Verified");
			$('.i2 > small').css('color', 'green');
			$('#exci4').hide();
			$('#chci4').show();
			$('#chci4').css('color', 'green');

			return true;
		}
	}


	//Password check

	$('#password2').keyup(function(){
		passwordCheck2();
		
	});
	function passwordCheck2(){
		var Password_str = $('#password').val();
		var Password2_str = $('#password2').val();
		if (Password2_str != Password_str) {
			$('#password2').css('border-color', 'red');
			$('.i3 > small').show();
			$('.i3 > small').html("Password didn't match");
			$('#chci5').hide();
			$('#exci5').show();
			$('#exci5').css('color', 'red');
			$('.i3 > small').css('color', 'red');
			return false;
		}else{
			$('#password2').css('border-color', 'green');
			$('.i3 > small').show();
			$('.i3 > small').html("Password Match");
			$('.i3 > small').css('color', 'green');
			$('#exci5').hide();
			$('#chci5').show();
			$('#chci5').css('color', 'green');

			return true;
		}
	}


});