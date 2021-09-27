//write a program to find out the given number is even or odd?
function evenorodd() {
	var n = document.getElementById("input").value;
	var i = 2;
	 
		if (n%i == 0){
		document.getElementById("output").innerHTML = "even";
		}
		
		else {
			document.getElementById("output").innerHTML = "odd";
		}
		
}