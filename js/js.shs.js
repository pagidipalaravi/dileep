function myFunction(){
    onload()
}
{
    let x =5;
    console.log(x)// block function
}
myFunction();

function myFunction() { // it has function so function scope
   let carName = "Volvo"; // if we declare varible before function it is globle function
  console.log(typeof carName + " " + carName); // local function=Variables declared within a JavaScript function, become LOCAL to the function
   
}

console.log(typeof carName);
         
