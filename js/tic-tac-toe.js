const board = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
const humanPiece = 'x'


window.onload = init;

function init() {
}

//  checks if any of the winning combos have been achieved
function gameOver() {
    for (combo of winningCombos) {
        if (board[combo[0]] == board[combo[1]] && board[combo[0]] == board[combo[2]] && board[combo[0]] != undefined) {
            document.getElementById("info").innerHTML = "🏆 " + board[combo[0]] + " is the champion 🏆"
            return board[combo[0]]
        }
    }
    if (!board.includes(undefined)) {
        document.getElementById("info").innerHTML = "No winner! x and ⭕ are tied 👔"
        return -1
    }

    return undefined
}

//  converts row and column into position on 2D board
function computePosition(row, col) {
    return row * 3 + col
}

function computerTurn() {
    if (humanPiece == 'o') {
        computerPiece = 'x'
    } else {
        computerPiece = 'o'
    }

    //look for winning positions
    for (combo of winningCombos) {
        pieces = combo.map((x) => board[x])
        if (pieces.filter((piece) => piece == computerPiece).length == 2 && pieces.filter((piece) => piece == undefined).length == 1) {
            return addMarker(combo[pieces.indexOf(undefined)], computerPiece)
        }
    }

    //block opponent
    for (combo of winningCombos) {
        pieces = combo.map((x) => board[x])
        if (pieces.filter((piece) => piece == humanPiece).length == 2 && pieces.filter((piece) => piece == undefined).length == 1) {
            return addMarker(combo[pieces.indexOf(undefined)], computerPiece)
        }
    }

    // random move
    while (true) {
        pos = Math.floor(Math.random() * 8);
        if (board[pos] == undefined) {
            return addMarker(pos, computerPiece)
        }
    }


}

//  game loop
function mark(event) {
    const pos = parseInt(event.target.id.match(/[0-9]+/g));

    if (gameOver() == undefined) {
        //  run a valid human turn
        addMarker(pos, humanPiece)
    }
    if (gameOver() == undefined) {
        computerTurn()
    }
    gameOver()
}

function addMarker(pos, piece) {
    const square = document.getElementById("square-" + pos)

    if (square.childElementCount == 0) {
        board[pos] = piece
        const markerElement = document.createElement("div")
        markerElement.classList.add(piece == 'x' ? "cross" : "circle")
        square.append(markerElement)
    }
}