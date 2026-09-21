const  buttonTaskThree = document.querySelector("#task3Btn");

let timerIdTaskThree = null;

const MIN_DELAY = 1;
const MAX_DELAY = 4;
const MS_PER_SECOND = 1000;

function getRandomSeconds(min, max){
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

buttonTaskThree.addEventListener('click', () => {
    if(timerIdTaskThree != null){
        clearInterval(timerIdTaskThree);
        timerIdTaskThree = null;

        return;
    }

    const randomSeconds = getRandomSeconds(MIN_DELAY, MAX_DELAY);

    timerIdTaskThree = setInterval(() => {
        console.log(randomSeconds + 'seconds');
    }, randomSeconds * MS_PER_SECOND);
});