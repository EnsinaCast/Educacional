// // Primeira tentativa do Countdown Fail
// let dataAtual = document.querySelector('.data-atual')
// let dataEvento = document.querySelector('.data-evento')
// let timerDays = document.querySelector('.timer-days')
// let timerHours = document.querySelector('.timer-hours')
// let timerMinutes = document.querySelector('.timer-minutes')
// let timerSeconds = document.querySelector('.timer-seconds')

// let diaEvento = new Date('Dez 24, 2020 00:00:00')

// var myfunc = setInterval(function () {
//     let data = new Date().getTime();
//     let resultadoData = (diaEvento - data)
    
//     let dias = Math.floor(resultadoData / (1000 * 60 * 60 * 24));
//     let horas = Math.floor(resultadoData % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//     let minutos = Math.floor(resultadoData % (1000 * 60 * 60) / (1000 * 60));    
//     let segundos = Math.floor(resultadoData % (1000 * 60) / 1000);

//     timerDays.innerHTML = dias 
//     timerHours.innerHTML = horas 
//     timerMinutes.innerHTML = minutos 
//     timerSeconds.innerHTML = segundos 

//     if (resultadoData < 0) {
//         clearInterval(myfunc);
//         document.querySelector(".timer-days").innerHTML = ""
//         document.querySelector(".timer-hours").innerHTML = "" 
//         document.querySelector(".timer-minutes").innerHTML = ""
//         document.querySelector(".timer-seconds").innerHTML = ""
//         document.querySelector("end").innerHTML = "Ho ho ho! É Natal";
//     }
// }, 1000);

// Pop-up
let alertaExibido = false
let div = document.querySelector('body')

div.addEventListener('mouseleave', function (){
        if (!alertaExibido){
        alert('Obrigado por nos visitar!')
        alertaExibido = true
    }
})

// Segunda tentativa Countdown
// Set the date we're counting down to
var countDownDate = new Date("Dec 24, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "HoHoHo! Feliz Natal!";
  }
}, 1000);

