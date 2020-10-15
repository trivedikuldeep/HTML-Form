const form = document.getElementById('form');
const FName = document.getElementById('FName');
const LName = document.getElementById('LName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
function checkInputs() {

	// trim to remove the whitespaces
	const FNameValue = FName.value.trim();
	const LNameValue = LName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(FNameValue === '') {
		//show error
		//add error class
		setErrorFor(FName, 'First Name cannot be blank');
	} else {
		//add success class
		setSuccessFor(FName);
	}
	if(LNameValue === '') {
		setErrorFor(LName, 'Last Name cannot be blank');
	} else {
		setSuccessFor(LName);
	}
	if (emailValue ==='') {
		setErrorFor(email, 'email cannot be blank');
	}else if(!isEmail(emailValue)){
		setErrorFor(email, 'email is not valid')
	}else{
		setSuccessFor(email)
	}
	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	if (password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Password does not match');
	}else {
		setSuccessFor(password2);
	}
}	
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	//add error class
	formControl.className = 'form-control error';
	//add error message inside small
	small.innerText = message;
}
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}