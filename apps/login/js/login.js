function doLogin() {
	var userid = "";
	var password = "";
	var x = 0;
	var y = 0;
	var z = 0;
	var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	var em = "Error : ";
	var sm = "Success :";
	userid = document.getElementById("userid").value;
	password = document.getElementById("password").value;
	 var useridLength = userid.length;
	 var passwordLength = password.length;
	 for (i = 0; i < passwordLength; i++) {
		if ('A' <= password[i] && password[i] <= 'Z')
		x++;
		if ('a' <= password[i] && password[i] <= 'z')
		y++;
		if ('0' <= password[i] && password[i] <= '9')
		z++;
	}
	/* userid validation start*/
	if (useridLength == 0) {
		em = em + "User name is empty.., Please enter user name";
		errorMessage(em);
	} else if (useridLength < 4) {
		em = em + "User Name should have more than  4 character";
		errorMessage(em);
	} else if (useridLength > 20) {
		em = em + "User Name should not have more than 20 character";
		errorMessage(em);
	} else if (userid != "ravikumar") {
		em = em + "User Name is not matching";
		errorMessage(em);
	}  
	/*userid  validation ends*/
	
	/* password  validation start*/
	else if (passwordLength == 0) {
		em = em + "password is Empty.., Please enter password";
		errorMessage(em);
	}else if (passwordLength < 8) {
		em = em + "passd should have more than  8 character";
		errorMessage(em);
	} else if (passwordLength > 16  ) {
		em = em + "passd should not have more than  16 character";
		errorMessage(em);
	} else if (x == 0) {
		em = em + "Password not contains Uppercase Letter";
		errorMessage(em);
	} else if (y == 0) {
		em = em + "Password not contains lowewrcase Letter";
		errorMessage(em);
	} else if (z == 0) {
		em = em + "Password not contains Numeric number";
		errorMessage(em);
	} else if (!regularExpression.test(password)) {
	em = em + "one special character Required !,@,#,$,%,^,&,*";
	errorMessage(em);
	} else if (password != "Surya123@") {
		em = em + "password is not matching, please retrieve";
		errorMessage(em);
	} 
	/* password  validation end*/
	
	if (userid == "ravikumar" && password == "Surya123@") {
		//send userid and password to the java and from java to database
		sm = sm + "Login successfully";
		successMessage(sm);
	}
	/*
	console.log(userId);
	console.log(password);
	console.log(x);
	console.log(y);
	console.log(z);*/
}

function restrictSpace() {
	if (event.keyCode == 32) {
		window.alert("Space not allowed here");
		return false;
	}
}

function errorMessage(errorMessage) {
	document.getElementById("message").setAttribute("class", "error-msg");
	document.getElementById("message").innerHTML = errorMessage;
}
function successMessage(successMsg) {
	document.getElementById("message").setAttribute("class","success-msg");
	document.getElementById("message").innerHTML= successMsg;
	//window.open("E:/App/html/home.html");
}