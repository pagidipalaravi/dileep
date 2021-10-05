//write a program to find out the given number is even or odd?
function evenorodd() {
	var n = document.getElementById("input").value;
	if (n%2 == 0){
		document.getElementById("output").innerHTML = "even";
	}
	else {
		document.getElementById("output").innerHTML = "odd";
	}	
}