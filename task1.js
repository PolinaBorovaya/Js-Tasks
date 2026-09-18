const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

const table = document.querySelector("#tableColor");
const button = document.querySelector("#button");

table.addEventListener('click', (e) => {
    if(e.target.closest('td')){
        const color = colors[Math.floor(Math.random() * colors.length)];
        button.style.backgroundColor = color;
    }
});