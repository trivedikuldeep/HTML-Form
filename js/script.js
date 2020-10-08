$(document).ready(function() {
	var form = $('#form');
	var FName = $('#FName');
	var LName = $('#LName');
	var email = $('#email');
	var password = $('#password');
	var password2 = $('#password2');
	
	$('.email').hide();
		
 });

// REFERENCESS

// $(document).ready(function() {
// 	$.fn.myFunction = function() {
//         alert('You have successfully defined the function!'); 
//     }
//     $("button").click(function(){
//         $.fn.myFunction();
//     });
// });

//REFERENCESSSS

// const LName = document.getElementById('LName');
// const LName = $('#LName');

//document.addEventListener('click', select_element, true);
//$(document).click(select_element);


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

// $(function() {
// 	// trim to remove the whitespaces
// 	var FNameValue = FName.value.trim();
// 	var LNameValue = LName.value.trim();
// 	var emailValue = email.value.trim();
// 	var passwordValue = password.value.trim();
// 	var password2Value = password2.value.trim();

// 	if (FNameValue == '') {
// 		setErrorFor(FName,'First Name cnnot be blank');
// 	} else{
// 		setSuccessFor(FName);
// 	}
// 	if(LNameValue === '') {
// 		setErrorFor(LName, 'Last Name cannot be blank');
// 	} else {
// 		setSuccessFor(LName);
// 	}
// 	if (emailValue ==='') {
// 		setErrorFor(email, 'email cannot be blank');
// 	}else if(!isEmail(emailValue)){
// 		setErrorFor(email, 'email is not valid')
// 	}else{
// 		setSuccessFor(email)
// 	}
// 	if (passwordValue === '') {
// 		setErrorFor(password, 'Password cannot be blank');
// 	} else {
// 		setSuccessFor(password);
// 	}
// 	if (password2Value === '') {
// 		setErrorFor(password2, 'Password2 cannot be blank');
// 	} else if(passwordValue !== password2Value) {
// 		setErrorFor(password2, 'Password does not match');
// 	}else {
// 		setSuccessFor(password2);
// 	}
// });


// 	$.fn.setSuccessFor = function(input,message){
// 		const formControl = input.parentElement;
// 		const small = formControl.querySelector(small);
// 		formControl.className = 'form-control error';
// 		small.innerText = message;
// 	}
// 	$.fn.setSuccessFor = function(input) {
// 		// body...
// 		const formControl = input.parentElement;
// 		formControl.className = 'form-control success';
// 	}
// $(document).ready(function() {
// 	$("button").click(function(){
// 		$()
// 	});
// });
