function updateTime(){
let now = new Date();

let date = now.toLocaleDateString("th-TH");
let time = now.toLocaleTimeString("th-TH");

document.getElementById("datetime").innerHTML =
"วันที่ " + date + " | เวลา " + time;
}

setInterval(updateTime,1000);
