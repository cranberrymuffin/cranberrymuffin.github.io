window.onload =  init;

var canvas, ctx;

function init(){
 canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");
 canvas.addEventListener('click', (event) => draw(event), false);

 resizeCanvas()
 window.addEventListener('resize', resizeCanvas, false);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function draw(event) {
    console.log(event.clientX)
    console.log(event.clientY)
    ctx.fillRect(event.clientX,event.clientY,10,10); // fill in 10x10 pixel grid
}