async function viewEmployees(){
	let status="";
	let message="";
	let arrayOfEmployeesObject = [];
	// Reading the employeee data from rest service by using axios javascript library
	let response = await axios.get('http://localhost:6010/employees/');
	debugger;
	status = response.data.status;
	message = response.data.message;
	arrayOfEmployeesObject = response.data.result;
	let table = "";
	let header = "<tr><th>Employee Id</th> <th> First Name</th> <th>lastName</th> <th> Email</th> <th>Phone Number</th> <th>Hire Date</th> <th>Salary</th> <th>Job Id</th> <th>Commision Pct</th> <th>Manager Id</th> <th>Departement Id</th><th>Action</th></tr>";
	let rows = ""; 
	for(let i = 0; i < arrayOfEmployeesObject.length; i++){
	    let employeeId = arrayOfEmployeesObject[i].employeeId;
		let firstName = arrayOfEmployeesObject[i].firstName; 
		let lastName = arrayOfEmployeesObject[i].lastName;
		let email = arrayOfEmployeesObject[i].email;
		let phoneNumber = arrayOfEmployeesObject[i].phoneNumber;
		let hireDate =arrayOfEmployeesObject[i].hireDate;
		let salary = arrayOfEmployeesObject[i].salary;
		let jobId = arrayOfEmployeesObject[i].jobId;
		let commisionPct = arrayOfEmployeesObject[i].commisionPct;
		let managerId = arrayOfEmployeesObject[i].managerId;
		let departmentId = arrayOfEmployeesObject[i].departmentId;
		let row = `<tr><td>${employeeId}</td> <td>${firstName}</td> <td>${lastName}</td> <td>${email}</td> <td>${phoneNumber}</td> <td>${hireDate}</td><td>${salary}</td><td>${jobId}</td><td>${commisionPct}</td><td>${managerId}</td><td>${departmentId}</td><td><a href='editemployee.html'><input id =${employeeId} type='button' onclick='readValue()' value='Edit'></a><input type='button' value='Delete'></td></tr>`;
		rows = rows + row;
		}
    table = "<table>"+ header + rows +"</table>";
	document.getElementById("showData").innerHTML = table;
	}