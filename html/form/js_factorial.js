function firstFactorial(){
	let n = document.getElementById("input").value;
	var x = 1;
	if (n == 0 || n == 1){
	 return 1;
	}
  for(let i = 1; i <= n; i++){
			x *=  i;	
	}
	document.getElementById("output").innerHTML = x ;
}

