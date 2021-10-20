function employeeForm(){
	var employeeId = document.getElementById("employeeId").value;
	var firstName = document.getElementById("employeeFirstName").value;
	var lastName = document.getElementById("employeeLastName").value;
	var email = document.getElementById("email").value;
	var phoneNumber = document.getElementById("phoneNumber").value;
	var hireDate = document.getElementById("hireDate").value;
	var salary = document.getElementById("salary").value;
	var jobId = document.getElementById("jobId").value;
    var commisionPct = document.getElementById("commisionPct").value;
	var managerId = document.getElementById("managerId").value;
	var departmentId = document.getElementById("departmentId").value;
	var employeeData = "Employee Id :" + employeeId + " " +"Name :" + firstName +" " + lastName + " " + "Email :" + email + " " +"Phone Number :" + 
	phoneNumber + " " +"Hire Date :" + hireDate + " " + "Salary :" + salary + " " +"Job Id :" + jobId + " " + "Commision Pct :" + commisionPct +" " + 
	"Manager Id :" + managerId + " " + "Department Id  :" + managerId ;
	console.log(employeeData);
}      