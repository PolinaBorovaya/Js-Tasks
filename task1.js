const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const mas = [ [1, 2], [2, 4], [3, 8], [4, 16], [5, 32] ];

const scaleX = 20;
const scaleY = 5;

mas.forEach(([x, y]) => {
    const px = x * scaleX + 60;
    const py = canvas.height - y * scaleY;

    ctx.beginPath();
    ctx.arc(px, py, 5, 0, Math.PI * 2);
    ctx.fill();
});