window.onload = init;

var canvas, ctx;
var drawing = false;
function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.addEventListener('mousedown', () => { drawing = true }, false)
    canvas.addEventListener('mouseup', () => { drawing = false }, false)
    canvas.addEventListener('mousemove', (event) => draw(event), false);
    canvas.addEventListener('mouseout',  () => { drawing = false }, false);
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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function draw(event) {
    if (drawing) {
        const rect = canvas.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI, false);
        ctx.fillStyle = getRandomColor();
        ctx.fill();
        ctx.lineWidth = 5;
    }
}