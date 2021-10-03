(function () { 
	let day = 1;
	if (day == 0) {
		day = "Sunday";
	}
	  else if (day == 1){
		day = "Monday";
	}
	   else if (day == 2){
		day = "Tuesday";
	}
	   else if (day == 3){
		day = "Wednesday";
	}
	  else if (day == 4){
		day = "Thursday";
	}
	  else if (day == 5){
		day = "Friday";
	}
	  else if (day == 6) {
		day = "Saturday";
	}
	  else {
			day = "Not a day";
	}
	console.log("Today day is " + day);
})()