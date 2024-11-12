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
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

function draw(event) {
    if (drawing) {
        ctx.fillRect(event.clientX, event.clientY, 10, 10); // fill in 10x10 pixel grid
    }
}