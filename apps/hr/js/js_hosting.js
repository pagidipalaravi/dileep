    function myFunction(){
        
    
            x = 5; // Assign 5 to x  
            elem = document.getElementById("demo"); // Find an element 
            elem.innerHTML = x;           // Display x in the element 
            var x; // hosting = moving all the declarations to top
    
    try {
        carName = "Saab";
        let carName = "Volvo";
      }
      catch(err) {
           console.log(err);
      } //ReferenceError: Cannot access 'carName' before initialization
      carName = "Volvo";
        //const carName; // constant will not allow declare const after initalization
        console.log(carName);

        var A=5;
        var B;
         console.log(A +" "+ B);// 5 undefined
         B=6;
    }