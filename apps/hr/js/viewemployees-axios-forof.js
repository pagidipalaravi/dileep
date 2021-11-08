async function viewEmployees(){
	let status="";
	let message="";
	let employeesArray = [];
	// Reading the employeee data from rest service by using axios javascript library
	let response = await axios.get('http://localhost:6010/employees/');
	debugger;
	status = response.data.status;
	message = response.data.message;
	employeesArray = response.data.result;
	let table = "";
	let header = "<tr><th>Employee Id</th> <th> First Name</th> <th>lastName</th> <th> Email</th> <th>Phone Number</th> <th>Hire Date</th> <th>Salary</th> <th>Job Id</th> <th>Commision Pct</th> <th>Manager Id</th> <th>Departement Id</th><th>Action</th></tr>";
	let rows = ""; 
	//for(let i = 0; i < arrayOfEmployeesObject.length; i++){
	for(let employee of employeesArray){
		console.log(employee);
		let row = `<tr><td>${employee.employeeId}</td> <td>${employee.firstName}</td> <td>${employee.lastName}</td> <td>${employee.email}</td> <td>${employee.phoneNumber}</td> <td>${employee.hireDate}</td><td>${employee.salary}</td><td>${employee.jobId}</td><td>${employee.commisionPct}</td><td>${employee.managerId}</td><td>${employee.departmentId}</td><td><a href='editemployee.html'><input id =${employee.employeeId} type='button' onclick='readValue()' value='Edit'></a><input type='button' value='Delete'></td></tr>`;
		rows = rows + row;
		}
    table = "<table>"+ header + rows +"</table>";
	document.getElementById("showData").innerHTML = table;
	}