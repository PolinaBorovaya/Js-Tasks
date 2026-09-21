const input = document.querySelector('#inputText');

let timerIdPrint;

const TIMER_TICK = 1000;

input.addEventListener('input', () => {
    clearTimeout(timerIdPrint);
    timerIdPrint = setTimeout(() =>{
        console.log(input.value);
    }, TIMER_TICK);
})