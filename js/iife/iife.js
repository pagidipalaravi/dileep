function onLoad(){
	console.log("This is  global scope function calling from html");
    regularFunction();
}	
(function (x) {  
	console.log("This is IIFE global scope function");
})(12)

function regularFunction(){
	console.log("This is Regular Function");
	(function () {  
		console.log("This is IIFE inner scope function");
	})()
}