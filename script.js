const pontsec = document.getElementById("sec")
const pontmin = document.getElementById("min")
const ponthora = document.getElementById("hora")

window.addEventListener("load", setclock)

setInterval(setclock, 1000)

function setclock(){
    let data = new Date()
    let sec = data.getSeconds()
    let min = data.getMinutes()
    let hora = data.getHours()

    pontsec.style.transform = `rotate(${sec*6}deg)`;
    pontmin.style.transform = `rotate(${min*6}deg)`;
    ponthora.style.transform = `rotate(${hora*15}deg)`;
}

