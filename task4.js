const input = document.querySelector('#inputText');

let timerId4;

input.addEventListener('input', () => {
    clearTimeout(timerId4);
    timerId4 = setTimeout(() =>{
        console.log(input.value);
    }, 1000);
})