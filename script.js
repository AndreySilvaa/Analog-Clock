const pontsec = document.getElementById("sec")
const pontmin = document.getElementById("min")
const ponthora = document.getElementById("hora")

window.addEventListener("load", setclock)

setInterval(setclock, 2000)

function setclock(){
    let data = new Date()
    let sec = data.getSeconds()
    let min = data.getMinutes()   //5m = 30deg
    let hora = data.getHours()
    console.log(hora)
    sec = sec*6
    min = min*6+(sec/60)
    switch(hora){
        case 13:
            hora = 1
            break
        case 14:
            hora = 2
            break
        case 15:
            hora = 3
            break
        case 16:
            hora = 4
            break
        case 17:
            hora = 5
            break
        case 18:
            hora = 6
            break
        case 19:
            hora = 7
            break
        case 20:
            hora = 8
            break
        case 21:
            hora = 9
            break
        case 22:
            hora = 10
            break
        case 23:
            hora = 11
            break
        case 24:
            hora = 12
            break
    }
    hora = hora*15*2+(min/12)
    pontsec.style.transform = `rotate(${sec}deg)`;
    pontmin.style.transform = `rotate(${min}deg)`;
    ponthora.style.transform = `rotate(${hora}deg)`;
}

