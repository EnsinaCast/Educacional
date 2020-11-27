let alertaExibido = false
// Countdown
let dataAtual = document.querySelector('.data-atual')
let dataEvento = document.querySelector('.data-evento')
let timerDays = document.querySelector('.timer-days')
let timerHours = document.querySelector('.timer-hours')
let timerMinutes = document.querySelector('.timer-minutes')
let timerSeconds = document.querySelector('.timer-seconds')

let diaEvento = new Date('Nov 27, 2020 12:00:00')

var myfunc = setInterval(function () {
    let data = new Date().getTime();
    let resultadoData = (diaEvento - data)
    
    let dias = Math.floor(resultadoData / (1000 * 60 * 60 * 24));
    let horas = Math.floor(resultadoData % (1000 * 60 * 60 * 24) / (1000 * 60 *60));
    let minutos = Math.floor(resultadoData % (1000 * 60 * 60) / (1000 * 60));    
    let segundos = Math.floor(resultadoData % (1000 * 60) / 1000);

    timerDays.innerHTML = dias 
    timerHours.innerHTML = horas 
    timerMinutes.innerHTML = minutos 
    timerSeconds.innerHTML = segundos 

    if (resultadoData < 0) {
        clearInterval(myfunc);
        document.querySelector(".timer-days").innerHTML = ""
        document.querySelector(".timer-hours").innerHTML = "" 
        document.querySelector(".timer-minutes").innerHTML = ""
        document.querySelector(".timer-seconds").innerHTML = ""
        document.querySelector("end").innerHTML = "ESTAMOS AO VIVO!!";
    }
}, 1000);

// Pop-up
let div = document.querySelector('body')
  

div.addEventListener('mouseleave', function (){
        if (!alertaExibido){
        alert('Não esqueça o seu eBook! Obrigado por nos visitar! ')
        alertaExibido = true
    }
})
