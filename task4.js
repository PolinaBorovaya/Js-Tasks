const input = document.querySelector('#inputText');

let timerIdTaskFour;

const TIMER_TICK = 1000;

input.addEventListener('input', () => {
    clearTimeout(timerIdTaskFour);
    timerIdTaskFour = setTimeout(() =>{
        console.log(input.value);
    }, TIMER_TICK);
})