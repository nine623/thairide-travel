<script>

/* =========================
   CLOCK (ปลอดภัย)
========================= */
function updateClock(){

    const now = new Date();

    const h = String(now.getHours()).padStart(2,'0');
    const m = String(now.getMinutes()).padStart(2,'0');
    const s = String(now.getSeconds()).padStart(2,'0');

    const clock = document.getElementById("clock");
    if(clock){
        clock.innerText = `${h}:${m}:${s}`;
    }
}

setInterval(updateClock,1000);
updateClock();


/* =========================
   VISITOR COUNTER (Fake)
========================= */
const visitors = document.getElementById("visitors");
if(visitors){
    const count = 120 + Math.floor(Math.random()*80);
    visitors.innerText = count;
}


/* =========================
   HERO SLIDE (FIXED VERSION)
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".hero-slide img");

    let index = 0;

    // ถ้าไม่มีรูป → stop ทันที
    if(slides.length === 0) return;

    function showSlide(){

        slides.forEach(img => img.classList.remove("active"));

        slides[index].classList.add("active");

        index++;

        if(index >= slides.length){
            index = 0;
        }
    }

    showSlide();
    setInterval(showSlide, 4000);
});


/* =========================
   BOOKING → LINE
========================= */
function sendBooking(){

    const name = document.getElementById("name")?.value || "";
    const contact = document.getElementById("contact")?.value || "";
    const pickup = document.getElementById("pickup")?.value || "";
    const dropoff = document.getElementById("dropoff")?.value || "";
    const date = document.getElementById("date")?.value || "";
    const time = document.getElementById("time")?.value || "";
    const passengers = document.getElementById("passengers")?.value || "";
    const vehicle = document.getElementById("vehicle")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const text =
`🚐 ThaiRide Booking%0A%0A
Name: ${name}%0A
Contact: ${contact}%0A
Pickup: ${pickup}%0A
Dropoff: ${dropoff}%0A
Date: ${date}%0A
Time: ${time}%0A
Passengers: ${passengers}%0A
Vehicle: ${vehicle}%0A
Message: ${message}`;

    window.open("https://line.me/R/msg/text/?" + text);

}


/* =========================
   CHAT MENU (FIXED)
========================= */
function toggleChat(){

    const menu = document.getElementById("chatMenu");

    if(!menu) return;

    if(menu.style.display === "flex"){
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

</script>
