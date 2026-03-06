
// CLOCK

function updateClock(){

const now=new Date()

document.getElementById("time").innerHTML=now.toLocaleTimeString()
document.getElementById("date").innerHTML=now.toDateString()

}

setInterval(updateClock,1000)


// HERO SLIDE

let slide=0
const slides=document.querySelectorAll(".hero-slide img")

function showSlide(){

slides.forEach(s=>s.style.display="none")

slide++

if(slide>slides.length) slide=1

slides[slide-1].style.display="block"

}

setInterval(showSlide,4000)

showSlide()



// BOOKING → LINE

function sendLine(){

window.open("https://lin.ee/775hjmvl")

}


// LIVE VISITOR

fetch("https://api.countapi.xyz/hit/thairide/visits")

.then(res=>res.json())

.then(res=>{

console.log("Visitors:",res.value)

})
