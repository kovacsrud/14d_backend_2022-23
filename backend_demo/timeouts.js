const id=setTimeout(function (){
    console.log("Hello")
},1000);

let count=0;

const iv=setInterval(function(){
    console.log("Interval");
    count++;
    if(count>10){
        clearInterval(iv);
    }
},1000);

