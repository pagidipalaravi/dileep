async function viewEmployees(){
	let arrayOfEmployeesObject = [];
		await $.getJSON("../js/model/employee.json",function(data){
			console.log(data);
			arrayOfEmployeesObject = data;
		});
		console.log(arrayOfEmployeesObject);
        let table = "";
		let header = "";
		let rows = ""; 
		// create header and insert heading into it.
		let header = "<tr><th>Employee Id</th> <th> First Name</th> <th>lastName</th> <th> Email</th> <th>Phone Number</th> <th>Hire Date</th> <th>Salary</th> <th>Job Id</th> <th>Commision Pct</th> <th>Manager Id</th> <th>Departement Id</th><th>Action</th></tr>";
		// created loop to retrive the data from the arrayOfEmployeesObject.It also create the row 
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
    table = "<table> "+ header + rows +"</table>";
	document.getElementById("showData").innerHTML = table;
}
function readValue(){
	localStorage.setItem("value",firstName);
	window.location.href="editemployee.js";
}