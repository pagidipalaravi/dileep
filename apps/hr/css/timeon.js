function timeOut(){
for (let i = 0; i < 5; i++) {
	((x)=>{setTimeout(function(){ console.log(i); },  i*1000 );
})(i);
}
}