window.onload = init;

function init() {
    var game = document.getElementById("game");
    var squareSide = findSquareSideSize();
    for(var i=0; i<400; i++) {
        var tile = document.createElement('canvas');
        tile.id     = "tile_" + i;
        tile.width  = squareSide;
        tile.height = squareSide;
        tile.style.background = "blue";
        tile.style.marginRight = "5px";
        tile.addEventListener('mouseup', (event) =>  onClick(event) , false)

        game.appendChild(tile)
    }
}

function onClick(event) {
    var tile = document.getElementById(event.target.id);
    if(tile.style.background == 'red') tile.style.background = "blue" 
    else tile.style.background = "red"
    console.log(event.target.id)
}

/*
 *   ❤️❤️❤️ to:
 *   https://math.stackexchange.com/questions/466198/algorithm-to-get-the-maximum-size-of-n-squares-that-fit-into-a-rectangle-with-a
 */
function findSquareSideSize() {
    var x=window.innerWidth, y=window.innerHeight;
    var n=400;

    var px=Math.ceil(Math.sqrt(n*x/y));
    var sx,sy;
    if(Math.floor(px*y/x)*px<n)  //does not fit, y/(x/px)=px*y/x
            sx=y/Math.ceil(px*y/x);
    else
            sx= x/px;
    var py=Math.ceil(Math.sqrt(n*y/x));
    if(Math.floor(py*x/y)*py<n)  //does not fit
            sy=x/Math.ceil(x*py/y);
    else
            sy=y/py;
    return Math.max(sx,sy);
}