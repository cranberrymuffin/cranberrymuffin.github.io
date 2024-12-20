const board = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined ]
const winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
const humanPiece = 'x'


window.onload = init;

function init() {
}

//  checks if any of the winning combos have been achieved
function gameOver(){
    for(combo of winningCombos) {
        if(board[combo[0]] == board[combo[1]] && board[combo[0]] == board[combo[2]] && board[combo[0]] != undefined){
            document.getElementById("info").innerHTML = "🏆 " + board[combo[0]] + " is the champion 🏆"
            return board[combo[0]]
        }
    }
    if(!board.includes(undefined)) {
        document.getElementById("info").innerHTML = "No winner! x and ⭕ are tied 👔"
        return -1
    }

    return undefined
}

//  converts row and column into position on 2D board
function computePosition(row, col){
    return row * 3 + col 
}

function computerTurn(){
    if(humanPiece == 'o'){
        piece = 'x'
    } else {
        piece = 'o'
    }

    pos = undefined

    for(combo of winningCombos) {
        pieces = combo.map((x) => board[x])
        console.log(pieces)
        console.log(pieces.filter((piece) => piece == humanPiece).length)
        console.log(pieces.filter((piece) => piece == undefined).length)
        if(pieces.filter((piece) => piece == humanPiece).length == 2 && pieces.filter((piece) => piece == undefined).length == 1){
            console.log(combo)
            pos = combo[pieces.indexOf(undefined)]
            break 
        }
    }
    console.log(pos)

    console.log(board[pos])

    if(pos == undefined || board[pos] != undefined) {
        while (true) {
            pos =  Math.floor(Math.random() * 8);
            if(board[pos] == undefined){
                break
            }
        }
    }
    

    addMarker(pos, piece)
}

//  game loop
function mark(event) {
    const pos = parseInt(event.target.id.match(/[0-9]+/g));
    console.log(pos)
    if(gameOver() == undefined) {
        //  run a valid human turn
        addMarker(pos, humanPiece)
    }
    if(gameOver() == undefined) {
        computerTurn()
    }
    gameOver()
}

function addMarker(pos, piece) {
    const square = document.getElementById("square-"+pos)
    console.log(square.childElementCount)
    if(square.childElementCount == 0) {
        board[pos] = piece  
        const markerElement = document.createElement("div")
        markerElement.classList.add(piece == 'x' ? "cross": "circle")
        square.append(markerElement)
    }
}