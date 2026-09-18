const button1 = document.querySelector('#task1Btn');

let timerId;

button1.addEventListener('click', () => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
        console.log("Hello World");
    }, 5000);
});
