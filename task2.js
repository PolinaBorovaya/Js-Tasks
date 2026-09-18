const button2 = document.querySelector('#task2Btn');

let timerId2 = null;

button2.addEventListener('click', () => {
    if(timerId2!=null){
        clearInterval(timerId2);
        timerId2 = null;
        return;
    }

    timerId2 = setInterval(() => {
        console.log("You are welcome!");
    }, 3000);
});