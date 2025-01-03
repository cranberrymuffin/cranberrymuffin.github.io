var board = [null, null, null, null, null, null, null, null, null]
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
var peer = null
var turn = 0
var myPiece = 'x'
started = false
var opponentConn = null

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
        opponentConn = conn
        conn.send(board)
        document.getElementById("you").innerHTML = "connected"
        started = true
        opponentConn.on('data', function(data) {
            board = data
            updateBoard()
            turn += 1
        })
    });
    peer.on('open', function () {
        document.getElementById("you").innerHTML = "ID: " + peer.id
    });
    turnIntroOff()
}

function join(id) {
    myPiece = 'o'
    
    peer = new Peer();

    peer.on('open', function () {
        opponentConn = peer.connect(id);
        // on open will be launch when you successfully connect to PeerServer
        opponentConn.on('open', function() {
            console.log("open")
            document.getElementById("you").innerHTML = "connected"
            started = true
            turnIntroOff()
        });
        opponentConn.on('data', function(data) {
            board = data
            updateBoard()
            turn += 1
        });
    
        document.getElementById("you").innerHTML = peer.id
    });

}

function joinExistingTwoPlayerGame() {
    join_code = document.createElement('input')
    join_code.id = "join-code"
    join_game_button = document.createElement('button')
    join_game_button.textContent= 'join';
    join_game_button.onclick = () => { join(document.getElementById('join-code').value) }

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
        if (board[combo[0]] == board[combo[1]] && board[combo[0]] == board[combo[2]] && board[combo[0]] != null) {
            document.getElementById("info").innerHTML = "🏆 " + board[combo[0]] + " is the champion 🏆"
            return board[combo[0]]
        }
    }
    
    if (!board.includes(null)) {
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
        if (pieces.filter((piece) => piece == computerPiece).length == 2 && pieces.filter((piece) => piece == null).length == 1) {
            return addMarker(combo[pieces.indexOf(null)], computerPiece)
        }
    }

    //block opponent
    for (combo of winningCombos) {
        pieces = combo.map((x) => board[x])
        if (pieces.filter((piece) => piece == humanPiece).length == 2 && pieces.filter((piece) => piece == null).length == 1) {
            return addMarker(combo[pieces.indexOf(null)], computerPiece)
        }
    }

    // random move
    while (true) {
        pos = Math.floor(Math.random() * 9);
        if (board[pos] == null) {
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
    if (!gameOver() && peer == null) {
        computerTurn()
        turn += 1
    }
    gameOver()
}

function addMarker(pos, piece) {
    const square = document.getElementById("square-" + pos)
    if (square.childElementCount == 0) {
        board[pos] = piece
    }
    updateBoard()
    if(opponentConn != null){
        opponentConn.send(board)
    }
}

function updateBoard() {
    for (let pos = 0; pos < board.length; pos++) {
        const square = document.getElementById("square-" + pos)
        if(board[pos] != null && !square.hasChildNodes()) {
            const markerElement = document.createElement("div")
            markerElement.classList.add(board[pos] == 'x' ? "cross" : "circle")
            square.append(markerElement)
        }
    }
    gameOver()
}