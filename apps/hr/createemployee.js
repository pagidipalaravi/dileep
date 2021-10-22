function employeeIdKeyPress(){
	document.getElementById("message").innerHTML="";
	if(isSpace(event.keyCode)) {
		return false;
	}else if(isSpecialCharacter(event.key)){
		return false;
	}else if(isAlphabet(event.key)){
		return false;
	}else{
		return true;
	}
}

function isSpace(keyCode){
	let isSpace = false;
	if (keyCode == 32) {
		errorMessage("Space not allowed here");
		isSpace = true;
	}
	return isSpace;
}

function isSpecialCharacter(key){
	let isSpecialCharacter = false;
	let regexp = new RegExp(".!@#$%^&*()_+-=<>~`");
	let patt = new RegExp(key);
	if (patt.test(regexp)) {
		errorMessage(key + " Special character not allowed here");
		isSpecialCharacter = true;
	}
	return isSpecialCharacter;
}

function isAlphabet(key){
	let isAlphabet = false;
	let regexp = new RegExp("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
	let patt = new RegExp(key);
	 if (patt.test(regexp)) {
		errorMessage(key +" character not allowed here");
		isAlphabet= true;
	}
	return isAlphabet;
}
function firstNameKeyPress(){
	document.getElementById("message").innerHTML="";
	if(isSpace(event.keyCode)) {
		return false;
	}else if(isSpecialCharacter(event.key)){
		return false;
	}else if (isNumber(event.key)){
		return false;
	}else {
		return true;
	}
}
 
 function isNumber(key){
	 let isNumber = false;
	 let regexp = new RegExp("0123456789");
	 let patt = new RegExp(key);
	 if(patt.test(regexp)){
		  errorMessage("number not allowed here");
		  isNumber = true;
	  }
	return isNumber;	
 }

function lastNameKeyPress(){
	document.getElementById("message").innerHTML="";
	if(isSpace(event.keyCode)) {
		return false;
	}else if(isSpecialCharacter(event.key)){
		return false;
	}else if (isNumber(event.key)){
		return false;
	}else {
		return true;
	}
}

function employeeForm(){
	let employeeId = document.getElementById("employeeId").value;
	validateEmployeeId(employeeId);
	let firstName = document.getElementById("firstName").value;
	validateFirstName(firstName);
	let lastName = document.getElementById("lastName").value;
	validateLastName(lastName);
	let email = document.getElementById("email").value;
	validateEmail(email);
	let phoneNumber = document.getElementById("phoneNumber").value;
	validatePhoneNumber(phoneNumber);
	let hireDate = document.getElementById("hireDate").value;
	validateHireDate(hireDate);
	let salary = document.getElementById("salary").value;
	validateSalary(salary);
	let job = document.getElementById("job").value;
	validateJob(job);
    let commisionPct = document.getElementById("commisionPct").value;
	validateCommisionPct(commisionPct);
	let manager = document.getElementById("manager").value;
	validateManager(manager);
	let department = document.getElementById("department").value;
	
	let employeeData = "Employee Id :" + employeeId + " " +"Name :" + firstName +" " + lastName + " " + "Email :" + email + " " +"Phone Number :" + 
	phoneNumber + " " +"Hire Date :" + hireDate + " " + "Salary :" + salary + " " +"Job Id :" + job + " " + "Commision Pct :" + commisionPct +" " + 
	"Manager Id :" + manager + " " + "Department  :" + department ;
	console.log(employeeData);
}      
 function validateEmployeeId(employeeId){
	if (employeeId == "" || employeeId == null){
	     document.getElementById("employeeId").style.borderColor = "red";
		 return "";
	}
 }
 

function validateFirstName(firstName){
	 if(firstName == "" ||  firstName == null){
		document.getElementById("firstName").style.borderColor = "red"; 
	 }
 } 

function validateLastName(lastName){
	if(lastName == "" || lastName == null){
	document.getElementById("lastName").style.borderColor = "red";	
	}
}
function validateEmail(email){
	if(email == "" || email == null ){
		document.getElementById("email").style.borderColor = "red";
	}
}
function validatePhoneNumber(phoneNumber){
	if(phoneNumber == "" || phoneNumber == null){
		document.getElementById("phoneNumber").style.backgroundColor = "red";
	}
}
function validateHireDate(hireDate){
	if(hireDate == "" || hireDate == null){
			document.getElementById("hireDate").style.backgroundColor = "red";
	}
}
function validateSalary(salary){
	if(salary == "" || salary == null){
		document.getElementById("salary").style.backgroundColor = "red";
	}
}
function validateJob(job){
	if (job == "" || job == null){
		document.getElementById("job").style.backgroundColor = "yellow";
	}
}
function validateCommisionPct(commisionPct){
	if(commisionPct == "" || commisionPct == null){
		document.getElementById("commisionPct").style.backgroundColor = "yellow";		
	}
}
function validateManager(manager){
	if(manager == "" || manager == null){
		document.getElementById("manager").style.backgroundColor = "yellow";
	}
}
function validateDepartment(department){
	if(department == "" || department == null){
		document.getElementById("department").style.backgroundColor = "yellow";
	}
}


function successMessage(successMsg) {
	document.getElementById("message").setAttribute("class","success-msg");
	document.getElementById("message").innerHTML= successMsg;
	//window.open("E:/App/html/home.html");
}
function errorMessage(errorMessage) {
	document.getElementById("message").setAttribute("class", "error-msg");
	document.getElementById("message").innerHTML = errorMessage;
}
// What is the difference between white box testing and black box testing?