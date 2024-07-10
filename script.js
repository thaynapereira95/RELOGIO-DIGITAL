const hour = document.querySelector('#hour'); // variavel para selecionar o id adicionado ao html
const min = document.querySelector('#min'); // variavel para selecionar o id adicionado ao html
const sec = document.querySelector('#sec'); // variavel para selecionar o id adicionado ao html

setInterval(() => { // função temporizadora executando infinitamente
    let date = new Date(); // variavel para a fata atual
    let hours = date.getHours(); //variavel criada para pegar o dia atual e obter as horas
    let minutes = date.getMinutes(); //variavel criada para pegar o dia atual e obter os minutos
    let seconds = date.getSeconds(); //variavel criada para pegar o dia atual e obter os segundos

    hour.innerHTML = `${formatTime(hours)}`; // selecionar do html em formato de tempo horas
    min.innerHTML = `${formatTime(minutes)}`; // selecionar do html em formato de tempo minutos
    sec.innerHTML = `${formatTime(seconds)}`; // selecionar do html em formato de tempo segundos

}, 1000); // contando os milesimos de segundo

function formatTime(time){ // função formato de tempo adicionando o parametro (time) para começar a contar
    return time < 10 ? "0" +time : time; //se o valor for menor que 10 adicione 0 a esquerda

}

