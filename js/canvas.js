window.onload = init;

var canvas, ctx;
var drawing = false;
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.addEventListener('mousedown', () => { drawing = true }, false)
    canvas.addEventListener('mouseup', () => { drawing = false }, false)
    canvas.addEventListener('mousemove', (event) => draw(event), false);
    canvas.addEventListener("touchstart", () => { drawing = true }, false)
    canvas.addEventListener("touchend", () => { drawing = false }, false)
    canvas.addEventListener("touchmove", (event) => draw(event), false);
    window.addEventListener('resize', () => resize());
    resize()
}

function resize() {
    resume = document.getElementById("resume");

    canvas.style.width = '100%';
    canvas.style.height = resume.height;
    canvas.width = canvas.offsetWidth;
    canvas.height = resume.offsetHeight;
}

function draw(event) {
    if (drawing) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        ctx.fillRect(x, y, 10, 10); // fill in 10x10 pixel grid
    }
}