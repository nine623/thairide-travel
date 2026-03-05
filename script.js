function openImage(src){

document.getElementById("viewer").style.display="flex";
document.getElementById("bigimg").src=src;

}

function closeImage(){

document.getElementById("viewer").style.display="none";

}

function clock(){

let now=new Date();
document.getElementById("clock").innerHTML=now.toLocaleString();

}

setInterval(clock,1000);

function counter(){

let c=localStorage.getItem("visits");

if(!c){c=1;}
else{c=parseInt(c)+1;}

localStorage.setItem("visits",c);

document.getElementById("visits").innerHTML=c;

}

window.onload=function(){

clock();
counter();

}
