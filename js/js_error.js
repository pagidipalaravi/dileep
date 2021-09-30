function myFunction(){
    div(72,12);
}
function div(x,y){
    try{
        if(y!=0){
            var res=x/y;
            console.log(res);
        }
        else{
            throw "cannot be divisible with zero";
        }
      console.log("add");  
    }
    catch(err){
        console.error(err);
    }
    finally{
        console.log("div");
    }
}