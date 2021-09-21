function myFunction(){
     thFunction()
}
var x =  2;
    var y = this.x //in globle function this is object window
    console.log(y)
function thFunction(){
    //"use strict"  
    const person = {
        firstName: "Dileep",//by using use strict this is undefine
        lastName: "mummidi",
        fullName:function() {
           return  this.firstName + " " + this.lastName; 
        }      
    };
    console.log(person.fullName());
}
     // this is used to recive an event 