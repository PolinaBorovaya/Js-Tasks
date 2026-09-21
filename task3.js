const  secondsBtn = document.querySelector("#task3Btn");

let timerIdSecond = null;

const MIN_DELAY = 1;
const MAX_DELAY = 4;
const MS_PER_SECOND = 1000;

function getRandomSeconds(min, max){
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

secondsBtn.addEventListener('click', () => {
    if(timerIdSecond != null){
        clearInterval(timerIdSecond);
        timerIdSecond = null;

        return;
    }

    const randomSeconds = getRandomSeconds(MIN_DELAY, MAX_DELAY);

    timerIdSecond = setInterval(() => {
        console.log(randomSeconds + 'seconds');
    }, randomSeconds * MS_PER_SECOND);
});