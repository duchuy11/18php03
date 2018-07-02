function checkValidate() {
	var name, email, passowrd, radio, city;
	name = document.getElementById('name').value;
	email = document.getElementById('email').value;
	password = document.getElementById('password').value;
	radio = document.getElementById('radio').checked;
	city = document.getElementById('city').value;

	if (name == '') {
		document.getElementById('error').innerHTML = ' Name ?';
	}

	if (email == '') {
		document.getElementById('error1').innerHTML = ' Email ?';
	} 

	if (password == '') {
		document.getElementById('error2').innerHTML = ' Password ?';
	}

	if (radio == '') {
		document.getElementById('error3').innerHTML = ' Gender ?';
	}

	if (city = "0") {
		document.getElementById('error4').innerHTML = ' City ?';
	}
}