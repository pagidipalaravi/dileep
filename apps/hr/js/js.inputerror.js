function myFunction(){
    input();
}
function input() {
    
    let x = 123;
    try { 
      if(x == "")  throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5)  throw "too low";
      if(x > 10)   throw "too high";
    }
    catch(err) {
      document.getElementById()("Input is " + err);
    }
  }  
   