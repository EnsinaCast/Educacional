// Countdown
let dataAtual = document.querySelector('.data-atual')
let dataEvento = document.querySelector('.data-evento')
let timer = document.querySelector('.timer')

setInterval(function () {
    let data = new Date()
    let diaEvento = new Date('Nov 26, 2020 18:00:00')
    let resultadoData = Math.floor(diaEvento - data)
    let dias = Math.floor(resultadoData / 1000 * 60 * 60 * 24)
    let seconds = Math.floor(resultadoData % (1000 * 60) / 1000)

    dataAtual.innerHTML = data
    dataEvento.innerHTML = resultadoData
    timer.innerHTML = seconds 
}, 1000)

setTimeout

// Pop-up
let div = document.querySelector('body')

div.addEventListener('mouseleave', function (){
    alert('Não esqueça o seu eBook! Obrigado por nos visitar! ')
})