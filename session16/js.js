
function genderMale() {
	document.getElementById('male').checked = 'true';
}

function genderFemale() {
	document.getElementById('female').checked = 'true';
}

function city() {
	document.getElementById('city').value = '1';
}

function register() {
	var name = document.getElementById('name').value;
	var male = document.getElementById('male').checked;
	var female = document.getElementById('female').checked;
	var yob = document.getElementById('yob').value;
	var cityHN = document.getElementById('HN').selected;
	var cityH = document.getElementById('H').selected;
	var cityDN = document.getElementById('DN').selected;
	var cityTN = document.getElementById('TN').selected;
	var citySG = document.getElementById('SG').selected;
	var maleWebList = ["https://www.24h.com.vn/bong-da-c48.html","https://www.foody.vn/da-nang/quan-nhau","https://www.foody.vn/da-nang/cafe"];
	var femaleWebList = ["https://www.lazada.vn/","https://travel.com.vn/","https://www.galaxycine.vn/"];
	localStorage.setItem('nameStorage',name);
	localStorage.setItem('yobStorage',yob);

	if (name == "") {
		alert('Please input your name');
	}

	if (male == true) {
		window.open('./Nam/index.html');
		for (var maleCount = 0 ; maleCount < maleWebList.length ; maleCount++) {
			window.open(maleWebList[maleCount]);
		}
		localStorage.setItem('genderMaleStorage',male);

	} else if (female == true) {
		window.open('./Nu/index.html');
		for (var femaleCount = 0 ; femaleCount < femaleWebList.length ; femaleCount++) {
			window.open(femaleWebList[femaleCount]);
		}
		localStorage.setItem('genderFemaleStorage',female);
	} else {
		alert("Please choose your gender");
	}

	if (cityHN == true) {
		localStorage.setItem('cityHNStorage',cityHN);
	} else if (cityH == true) {
		localStorage.setItem('cityHStorage',cityH);
	} else if (cityDN == true) {
		localStorage.setItem('cityDNStorage',cityDN);
	} else if (cityTN == true) {
		localStorage.setItem('cityTNStorage',cityTN);
	} else if (citySG == true) {
		localStorage.setItem('citySGStorage',citySG);
	} else {
		alert('Please select your city');
	}

	if (yob == "") {
		alert('Please input your year of birth');
	} else {
	if(yob >= 1990) {
		document.body.style.backgroundColor = 'green';
		document.body.style.color = 'white';
		document.getElementById("form").style.borderColor = "white";
	} else if (yob < 1990) {
		document.body.style.backgroundColor = 'blue';
		document.body.style.color = 'white';
		document.getElementById("form").style.borderColor = "white";
	}
	}
}

function deleteInfo() {
	localStorage.clear();
}