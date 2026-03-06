function updateClock(){

const now = new Date();

document.getElementById("time").innerHTML =
now.toLocaleTimeString();

document.getElementById("date").innerHTML =
now.toDateString();

}

setInterval(updateClock,1000);
