function updateClock(){

const now = new Date();

const date = now.toLocaleDateString("th-TH");
const time = now.toLocaleTimeString("th-TH");

document.getElementById("date").innerHTML="📅 "+date;
document.getElementById("time").innerHTML="⏰ "+time;

}

setInterval(updateClock,1000);

function sendToLine(){

let name=document.getElementById("name").value;
let date=document.getElementById("dateTravel").value;
let time=document.getElementById("timeTravel").value;
let pickup=document.getElementById("pickup").value;
let drop=document.getElementById("drop").value;
let car=document.getElementById("car").value;
let people=document.getElementById("people").value;
let note=document.getElementById("note").value;

let msg=
`จองรถ ThaiRide Travel

ชื่อ: ${name}
วันที่: ${date}
เวลา: ${time}

รับ: ${pickup}
ส่ง: ${drop}

รถ: ${car}
ผู้โดยสาร: ${people}

หมายเหตุ: ${note}
`;

let url="https://line.me/R/share?text="+encodeURIComponent(msg);

window.open(url);
}
