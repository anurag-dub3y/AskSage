
document.getElementById('butt').addEventListener("click",func);

function func(){
    var x = Math.floor((Math.random()*2));
    console.log(x);
    if(x===1){
        console.log("Value is 1");
        document.getElementById("text").innerHTML="GO FOR IT!";
        document.getElementById("t").src="tick-mark.png";
    }
    else{
        console.log("Value is 0");
        document.getElementById("text").innerHTML="SAGE DOESN'T THINK YOU SHOULD GO FOR IT!";
        document.getElementById("t").src="forbidden.png";
    }
    document.getElementById('butt').innerHTML="Ask Again";
    
}