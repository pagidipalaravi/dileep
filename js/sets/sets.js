function displayEmployeeId(){
// Create a Set
	const employeeId = new Set();
	// Add Values to the Set
	employeeId.add("217");
	employeeId.add("100");
	employeeId.add("101");
	employeeId.add("102");
	employeeId.add("103");
	employeeId.add("104");
	employeeId.add("105");
	employeeId.add("106");
	employeeId.add("107");
	employeeId.add("108");
	employeeId.add("109");
	employeeId.add("110");
	// Display set.size
	document.getElementById("demo").innerHTML = "size ="+employeeId.size;
	let id = "";
	employeeId.forEach (function(value) {
	  id += value + "<br>";
	})
	document.getElementById("demo1").innerHTML = "employeeIds" + id;
	let num = "";
	for (const x of employeeId.values()) {
	num += x + "<br>";
	}
	document.getElementById("demo2").innerHTML = "employeeId"+num;
}