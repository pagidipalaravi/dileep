function wordCounter() {
	text = document.getElementById("input").value;
  var text = input.value.split(' ');
  var wordCount = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      wordCount++;
    }
  }
  document.getElementById("output").innerText = "word count is" + wordCount;
}

function vowelCount(){
	var t = document.getElementById("input1").value; 
	// need to check (a,e,i,o,u) in every word and count how many vowels in given para.
	const vowels = ["a","e","i","o","u"]
	let count = 0; 
	for (let letter of t.toLowerCase()){
		if (vowels.includes(letter)) {
            count++;
        }
	}
	document.getElementById("output1").innerHTML = count ;	
}

function matchWord(){
	var m = document.getElementById("input2").value;
	  t=m.toLowerCase();
		document.getElementById("output2").innerHTML = t.match(/are/g);
	
}