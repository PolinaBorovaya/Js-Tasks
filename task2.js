const buttonTaskTwo = document.querySelector('#task2Btn');

let timerIdTaskTwo = null;
const TIMER_TICK = 3000;

buttonTaskTwo.addEventListener('click', () => {
    if(timerIdTaskTwo!=null){
        clearInterval(timerIdTaskTwo);
        timerIdTaskTwo = null;

        return;
    }

    timerIdTaskTwo = setInterval(() => {
        Welcome();
    }, TIMER_TICK);
});

function Welcome(){
    console.log("You are welcome!");
};