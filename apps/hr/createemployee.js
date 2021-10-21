function employeeForm(){
	let employeeId = document.getElementById("employeeId").value;
	let regExp = "^\d{10}$";
	validateEmployeeId(employeeId);
	let firstName = document.getElementById("employeeFirstName").value;
	validateFirstName(firstName);
	let lastName = document.getElementById("employeeLastName").value;
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
	if (employeeId == "" || employeeId == null|| employeeId == regExp 	){
	     document.getElementById("message").innerHTML = "please enter the employeeId";
		 return "";
	}
 }
 function validationEmployeeId(){
	 if()
 }
function validateFirstName(firstName){
	 if(firstName == "" ||  firstName == null){
		document.getElementById("message").innerHTML = "please enter the FirstName"; 
	 }
 } 

function validateLastName(lastName){
	if(lastName == "" || lastName == null){
	document.getElementById("message").innerHTML = "please enter the LastName";	
	}
}
function validateEmail(email){
	if(email == "" || email == null ){
		document.getElementById("message").innerHTML = "please enter the correct Email";
	}
}
function validatePhoneNumber(phoneNumber){
	if(phoneNumber == "" || phoneNumber == null){
		document.getElementById("message").innerHTML = "please enter the correct Phone Number";
	}
}
function validateHireDate(hireDate){
	if(hireDate == "" || hireDate == null){
			document.getElementById("message").innerHTML = "please enter the Hire Date";
	}
}
function validateSalary(salary){
	if(salary == "" || salary == null){
		document.getElementById("message").innerHTML = "please enter the Salary";
	}
}
function validateJob(job){
	if (job == "" || job == null){
		document.getElementById("message").innerHTML = "please enter the job";
	}
}
function validateCommisionPct(commisionPct){
	if(commisionPct == "" || commisionPct == null){
		document.getElementById("message").innerHTML = "please enter the CommisionPct";		
	}
}
function validateManager(manager){
	if(manager == "" || manager == null){
		document.getElementById("message").innerHTML = "please enter the manager";
	}
}
function validateDepartment(department){
	if(department == "" || department == null){
		document.getElementById("message").innerHTML = "please enter the Department";
	}
}
