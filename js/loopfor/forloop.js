function forloop(){
	let text = "";
	for(let i = 1; i < 5; i++){
		text += "The number is " + i + "<br>"; 
	}
	document.getElementById("demo").innerHTML = text;
}