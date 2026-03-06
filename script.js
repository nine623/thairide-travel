function updateClock(){

let now = new Date()

let time = now.toLocaleTimeString()
let date = now.toDateString()

document.getElementById("clock").innerHTML = time
document.getElementById("date").innerHTML = date

}

setInterval(updateClock,1000)
updateClock()
