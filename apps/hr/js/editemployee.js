
function editEmployee(key){
	setValues();
	getEmployeeById(employeeId);
	getJobs();
	getManagers();
	getDepartments();
	getCurrntDate();
	
}
function setValues(){
	var x = localStorage.getItem("value");
	var resetValue = newFunction(x);
	localStorage.setItem("myValue", resetValue);   
}
function newFunction(x) {
	console.log(`employeeId=${x}`);
	var resetValue = 0;
	return resetValue;  

}

function getEmployeeById(employeeId){
	// call getEmployeeById rest service
	console.log(event);
	  
}
//Return true when we press space. 
function isSpace(keyCode){
	let isSpace = false;
	if (keyCode == 32) {
		errorMessage("Space not allowed here");
		isSpace = true;
	}
	return isSpace;
}
// Return true when we press special character in input.
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
//Return true when we press Alphabet in input.
function isAlphabet(key){
	let isAlphabet = false;
	let regexp = new RegExp("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\d");
	let patt = new RegExp(key);
	 if (patt.test(regexp)) {
		errorMessage(key +" character not allowed here");
		isAlphabet= true;
	}
	return isAlphabet;
}
 // Return true when we press number in input.
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

// Return true when we press decimal in input.
function checkDecimal(){
	let checkDecimal = false;
	let input = document.getElementById("commisionPct").value;
	var RE = /^[0-9]\d*\.[0-9]\d+$/;
    if(RE.test(input)){
		checkDecimal = true;	
	}
	return checkDecimal;
}
//Return true when we enter input is given.
function checkEmail() {
        var email = document.getElementById('email');
        var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!filter.test(email.value)) {
            errorMessage('Please provide a valid email address');
            email.focus;
            return false;
        }
}
	
// Write the success message into HTML.
function successMessage(successMsg) {
	document.getElementById("message").setAttribute("class","success-msg");
	document.getElementById("message").innerHTML= successMsg;
	
}
// Write the error message into HTML.
function errorMessage(errorMessage) {
	document.getElementById("message").setAttribute("class", "error-msg");
	document.getElementById("message").innerHTML = errorMessage;
}
// onload calling
function onloadCreateEmployee(){
	getJobs();
	getManagers();
	getDepartments();
	getCurrntDate();
}
//Employee Id Validation goes here
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
/***first Name validation goes here***/
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
/***last Name validation goes here***/
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
/***Email validation goes here***/
function emailKeyPress(){
	document.getElementById("message").innerHTML="";
	if(isSpace(event.keyCode)) {
		return false;
	}else if (checkEmail(event.key)){
		return false;
	}else{
		return true;
	}	
}

/****/
function phoneNumberKeyPress(){
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
/**Hire date**/
function getCurrntDate(){
	let date = new Date();
	let dd = date.getDate();
	let mm = date.getMonth() + 1;
	let yyyy = date.getFullYear();
	if(dd < 10){
		dd = "0" + dd; 
	}
	if(mm < 10){
		mm = "0" + mm;
	}
	let yyyy_mm_dd = ((yyyy) +"-" + (mm) + "-" + (dd));
	console.log("date=" + yyyy_mm_dd);
	document.getElementById("hireDate").min = yyyy_mm_dd ;
	document.getElementById("hireDate").value = yyyy_mm_dd;
}
/**Sal**/
function salarykeypress(){
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
/**job**/
function getJobs(){
	let jobOptions = "<option>Please Select</option>";
	/** TODO 
		Get the arrayOfJobs by calling java rest service
		The REST service will gets the arrayOfJobs from database
	**/
	let arrayOfJobs = [
		{"jobId":12,"jobName":"IT_PROG"},
		{"jobId":24,"jobName":"IT_PROG"},
		{"jobId":8,"jobName":"AD_VP"},
		{"jobId":32,"jobName":"FI_MGR"},
		{"jobId":55,"jobName":"FI_ACCOUNT"}
	];
	for(let i = 0; i < arrayOfJobs.length; i++){
		let jobId = arrayOfJobs[i].jobId;	
		let jobName = arrayOfJobs[i].jobName;
		jobOptions = jobOptions + "<option value=" + jobId + ">" + jobName + "</option>";	  
	}
	console.log(jobOptions);
	document.getElementById("job").innerHTML = jobOptions;
}
/**commision Pct**/
function commisionPctKeyPress(){
	document.getElementById("message").innerHTML="";
	if(isSpace(event.keyCode)) {
		return false;
	}else if(checkDecimal(event.key)){
		return false;
	}else {
		return true;
	}
}
function getManagers(){
	let managerOptions = "<option>Please Select</option>";
	let arrayOfManagers = [{"managerId":103,"managerName":"Raghu"},
	{"managerId":102,"managerName": "Uday"},
	{"managerId":100,"managerName": "Ravi"},
	{"managerId":100,"managerName": "Srinu"},
	{"managerId":100,"managerName": "Dileep"},
	{"managerId":103,"managerName": "madhu"},
	{"managerId":103,"managerName": "Ganesh"},
	{"managerId":103,"managerName": "Surya"},
	{"managerId":103,"managerName": "shiva"},
	{"managerId":101,"managerName": "varun"},
	{"managerId":108,"managerName": "Vijay"},
	{"managerId":108,"managerName":"Roy"}];
	for(let i = 0; i < arrayOfManagers.length; i++){
		let managerId = arrayOfManagers[i].managerId;
        let managerName = arrayOfManagers[i].managerName;
		managerOptions = managerOptions+ "<option value =" + managerId + ">" + managerName + "</option>";
	}
	console.log(managerOptions);
	document.getElementById("manager").innerHTML = managerOptions;
}
function getDepartments(){
	let departmentOptions ="<option>Please Select</option>";
	let arrayOfDepartements =[
		{"departmentId":60,"departmentName":"IT_Programer"},
		{"departmentId":90,"departmentName":"IT_Support"},
		{"departmentId":90,"departmentName":"manager"},
		{"departmentId":90,"departmentName":"senior_developer"},
		{"departmentId":60,"departmentName":"general_manager"},
		{"departmentId":60,"departmentName": "clerk"},
		{"departmentId":60,"departmentName":"accounts"}, 
		{"departmentId":60,"departmentName":"Frontend_developer"}
		]
		for(let i = 0; i < arrayOfDepartements.length; i++){
			let departmentId = arrayOfDepartements[i].departmentId;
			let departmentName = arrayOfDepartements[i].departmentName;
			departmentOptions = departmentOptions + "<option value =" + departmentId + ">" + departmentName + "</option>";
		}
		console.log(departmentOptions);
		document.getElementById("department").innerHTML = departmentOptions;
}

// This is Submit function 
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
	validateDepartment(department);
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
		document.getElementById("phoneNumber").style.borderColor = "red";
	}
}
function validateHireDate(hireDate){
	if(hireDate == "" || hireDate == null){
			document.getElementById("hireDate").style.borderColor  = "red";
	}
}
function validateSalary(salary){
	if(salary == "" || salary == null){
		document.getElementById("salary").style.borderColor  = "red";
	}
}
function validateJob(job){
	if (job == "Please Select"){
		document.getElementById("job").style.borderColor  = "red";
	}
}
function validateCommisionPct(commisionPct){
	if(commisionPct == "" || commisionPct == null){
		document.getElementById("commisionPct").style.borderColor  = "red";		
	}
}
function validateManager(manager){
	if(manager == "Please Select"){
		document.getElementById("manager").style.borderColor  = "red";
	}
}
function validateDepartment(department){
	if(department == "Please Select" ){
		document.getElementById("department").style.borderColor  = "red";
	}
}