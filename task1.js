const printHelloBtn = document.querySelector('#task1Btn');

let timerIdHello;

printHelloBtn.addEventListener('click', () => {
    clearTimeout(timerIdHello);

    timerIdHello = setTimeout(() => {
        console.log("Hello World");
    }, 5000);
});
