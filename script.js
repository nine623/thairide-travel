
document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;
let pickup = document.getElementById("pickup").value;
let dropoff = document.getElementById("dropoff").value;
let car = document.getElementById("car").value;
let passengers = document.getElementById("passengers").value;
let note = document.getElementById("note").value;


let message = `จองรถ ThaiRide Travel

ชื่อ: ${name}

วันที่: ${date}

เวลา: ${time}

จุดรับ: ${pickup}

จุดส่ง: ${dropoff}

รถ: ${car}

ผู้โดยสาร: ${passengers}

หมายเหตุ: ${note}`;

let lineURL = "https://line.me/R/msg/text/?" + encodeURIComponent(message);

window.open(lineURL);

});



function updateClock(){

let now = new Date();

document.getElementById("dateNow").innerHTML =
now.toLocaleDateString("th-TH");

document.getElementById("timeNow").innerHTML =
now.toLocaleTimeString("th-TH");

}

setInterval(updateClock,1000);

updateClock();
