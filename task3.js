const  button3 = document.querySelector("#task3Btn");

let timerId3 = null;

button3.addEventListener('click', () => {
    if(timerId3 != null){
        clearInterval(timerId3);
        timerId3 = null;
        return;
    }

    const random = Math.floor(Math.random() * 4) + 1 ;

    timerId3 = setInterval(() => {
        console.log(random + 'seconds');
    }, random * 1000);
});