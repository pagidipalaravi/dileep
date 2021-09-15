function myFunction(){
    onload()
}
    function myFunction(){
        let text = "";
        for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; } // continue while skip i === 3
        text += "The number is " + i + "<br>";
    }
    console.log(text)
}