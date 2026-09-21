const buttonTaskOne = document.querySelector('#task1Btn');

let timerIdTaskOne;

buttonTaskOne.addEventListener('click', () => {
    clearTimeout(timerIdTaskOne);

    timerIdTaskOne = setTimeout(() => {
        console.log("Hello World");
    }, 5000);
});
