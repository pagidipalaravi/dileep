//write a program  to findout reverse  of given number?
function reverse(){
	var num = document.getElementById("input").value;
		var reversed_number = 0;
		while (num != 0) {
		reversed_number *= 10;
		reversed_number += num % 10;
		num -= num % 10;
		num /= 10;
}
 if(reversed_number == ){
	 document.getElementById("output").innerHTML=  "palindromic" ;
 }
  else {
	  document.getElementById("output").innerHTML = "Not a palindromic";
  }
} 


//write a program  to findout reverse  of given number?
function polindrom(){
	var num = document.getElementById("input").value;// 23432
	var num1 = num;
	var rev = 0;
	while (num != 0) { 
		rev = rev * 10;
		rem = num % 10;
		num = num - rem;
		num = num / 10;
		rev = rev + rem;
		}
 if(num1 == rev){
	 document.getElementById("output").innerHTML=  "palindromic" ;
 }
  else {
	  document.getElementById("output").innerHTML = "Not a palindromic";
  }
} 

