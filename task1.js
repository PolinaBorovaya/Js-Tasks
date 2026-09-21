const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const mas = [ [1, 2], [2, 4], [3, 8], [4, 16], [5, 32] ];

const SCALE_X = 20;
const SCALE_Y = 5;

const SHIFT_X = 60;

const RADIUS = 5;
const START_ANGLE = 0;
const END_ANGLE = Math.PI * 2;


mas.forEach(([x, y]) => {
    const px = x * SCALE_X + SHIFT_X;
    const py = canvas.height - y * SCALE_Y;

    ctx.beginPath();
    ctx.arc(px, py, RADIUS, START_ANGLE, END_ANGLE);
    ctx.fill();
});