class employee {
	constructor(name,phoneNumber) {
		this.name = name;
		this.phoneNumber = phoneNumber;
	}
	
}
function onloadFunction(){
let emp = new employee("Dileep", 7732032887);
let emp2 = new employee("Surya", 9848444431);
document.getElementById("demo").innerHTML = "Empl detailes="+" " + emp.name+" "+emp.phoneNumber+" "+"Empl detailes="+" " + emp2.name+" "+emp2.phoneNumber; 
 car1();
}
class car{
	constructor(name,model){
		this.name = name;
		this.model = model;
	}
}
function car1(){
let myCar = new car("BMW","Q7");
document.getElementById("demo1").innerHTML= "My car is " + myCar.name +" "+ myCar.model;
}