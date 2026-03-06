
// CLOCK

function updateClock(){

let now=new Date()

document.getElementById("time").innerHTML=
now.toLocaleTimeString()

document.getElementById("date").innerHTML=
now.toDateString()

}

setInterval(updateClock,1000)



// LINE BOOKING

document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault()

let text="Booking ThaiRide%0A"

window.open("https://line.me/R/ti/p/@775hjmvl?text="+text)

})


// VISITOR COUNTER

let online=Math.floor(Math.random()*50)+20
let today=Math.floor(Math.random()*500)+100

document.getElementById("online").innerHTML=online
document.getElementById("today").innerHTML=today
