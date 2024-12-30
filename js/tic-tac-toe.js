const board = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
var peer = undefined
var turn = 0
var myPiece = 'x'
started = false

window.onload = () => {};

function getPiece() {
    return turn % 2 == 0 ? 'x' : 'o'
}

function getOpponentPiece() {
    return getPiece() == 'x' ? 'o' : 'x'
}

function isTurn() {
    return getPiece() == myPiece
}

function generateOnePlayerGame() {
    started = true
    turnIntroOff()
}
function turnIntroOff() {
    document.getElementById("intro").remove()
}

function generateNewTwoPlayerGame() {
    peer = new Peer();
    myPiece = 'x'
    peer.on('connection', function(conn) {
        document.getElementById("you").innerHTML = "connected"
        started = true
    });
    peer.on('open', function () {
        document.getElementById("you").innerHTML = "ID: " + peer.id
    });
    turnIntroOff()
}

function join(id) {
    myPiece = 'o'
    if(peer == null) {
        peer = new Peer();
    }
    const conn = peer.connect(id, {
        reliable: true
    });
    // on open will be launch when you successfully connect to PeerServer
    conn.on('open', function() {
        document.getElementById("you").innerHTML = "connected"
        started = true
        turnIntroOff()
    });
    document.getElementById("you").innerHTML = peer.id
}

function joinExistingTwoPlayerGame() {
    join_code = document.createElement('input')
    join_code.id = "join-code"
    join_game_button = document.createElement('button')
    join_game_button.textContent= 'join';
    join_game_button.onclick = () => join(document.getElementById('join-code').value)

    document.getElementById("options").replaceChildren(join_code, join_game_button)
}

function setUpTwoPlayerGame() {

    new_game_button = document.createElement('button')
    new_game_button.textContent= 'new game';
    new_game_button.onclick = generateNewTwoPlayerGame

    existing_game_button = document.createElement('button')
    existing_game_button.textContent= 'join existing game';
    existing_game_button.onclick = joinExistingTwoPlayerGame

    document.getElementById("options").replaceChildren(new_game_button, existing_game_button)
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

    return !started
}

//  converts row and column into position on 2D board
function computePosition(row, col) {
    return row * 3 + col
}

function computerTurn() {
    humanPiece = getOpponentPiece()
    computerPiece = getPiece()

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
        pos = Math.floor(Math.random() * 9);
        if (board[pos] == undefined) {
            return addMarker(pos, computerPiece)
        }
    }
}

//  game loop
function mark(event) {
    const pos = parseInt(event.target.id.match(/[0-9]+/g));

    if (!gameOver() && isTurn()) {
        //  run a valid human turn
        addMarker(pos, getPiece())
        turn += 1
    }
    if (!gameOver() && peer == undefined) {
        computerTurn()
        turn += 1
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