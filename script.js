// ===============================
// AUTO LANGUAGE DETECT
// ===============================
const userLang = navigator.language || navigator.userLanguage;
document.documentElement.lang = userLang;


// ===============================
// DATE + TIME DIGITAL CLOCK
// ===============================
function updateDateTime(){
    const now = new Date();

    document.getElementById("date").innerHTML =
        "วันที่: " + now.toLocaleDateString();

    document.getElementById("time").innerHTML =
        "เวลา: " + now.toLocaleTimeString();
}

setInterval(updateDateTime,1000);
updateDateTime();


// ===============================
// VISITOR COUNTER (LOCAL)
// ===============================
let visitCount = localStorage.getItem("visitCount");

if(!visitCount){
    visitCount = 1;
}else{
    visitCount = parseInt(visitCount) + 1;
}

localStorage.setItem("visitCount", visitCount);

if(document.getElementById("visits")){
    document.getElementById("visits").innerHTML =
        "ผู้เข้าชม: " + visitCount;
}


// ===============================
// COUNTRY DETECT (IP API)
// ===============================
fetch("https://ipapi.co/json/")
.then(response => response.json())
.then(data => {
    if(document.getElementById("country")){
        document.getElementById("country").innerHTML =
            "ประเทศ: " + data.country_name;
    }
})
.catch(()=>{
    if(document.getElementById("country")){
        document.getElementById("country").innerHTML =
            "ประเทศ: ไม่ทราบ";
    }
});


// ===============================
// SIMPLE CALENDAR
// ===============================
function generateCalendar(){
    const calendar = document.getElementById("calendar");
    if(!calendar) return;

    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let table = "<table style='width:100%;color:#00ff88;text-align:center;font-size:12px;'>";
    table += "<tr>";

    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    for(let d of days){
        table += "<th>"+d+"</th>";
    }

    table += "</tr><tr>";

    for(let i=0;i<firstDay;i++){
        table += "<td></td>";
    }

    for(let day=1; day<=daysInMonth; day++){
        if((firstDay + day -1) % 7 === 0){
            table += "</tr><tr>";
        }
        table += "<td>"+day+"</td>";
    }

    table += "</tr></table>";

    calendar.innerHTML = table;
}

generateCalendar();
