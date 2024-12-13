var isX = false
var board = [["1","2","3"],["4","5","6"],["7","8","9"]]
var isOver = false

updateInfo()

function updateInfo() {
    document.getElementById("info").innerHTML = (isX ? "X" : "O") + "'s Turn"
}

function updateWin(winner) {
    document.getElementById("info").innerHTML = winner + " wins!"
    isOver = true
}

function mark(event) {
    const square = document.getElementById(event.target.id)
    if(square != null && square.childElementCount == 0 && !isOver) {
        const squareNumber = parseInt(event.target.id.match(/\d+/g)) - 1;
        const row = Math.floor(squareNumber / 3)
        const col = squareNumber % 3
        board[row][col] = isX ? "X" : "O"
        addMarker(square, isX ? "cross": "circle")
        isX = !isX
        updateInfo()
        checkBoard()
    }
}

function checkBoard() {
    if(board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
        updateWin(board[0][0])
    }
    else if(board[1][0] === board[1][1] && board[1][0]  === board[1][2]) {
        updateWin(board[1][0])
    }
    else if(board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
        updateWin(board[2][0])
    }
    else if(board[0][0] === board[1][0] &&  board[0][0] === board[2][0]) {
        updateWin(board[0][0])
    }
    else if(board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
        updateWin(board[0][1])
    }
    else if(board[0][2] === board[1][2] && board[0][2]  === board[2][2]) {
        updateWin(board[0][2])
    }
    else if(board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        updateWin(board[0][0])
    }
    else if(board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        updateWin(board[0][2])
    }
}

function addMarker(square, type) {
    const markerElement = document.createElement("div")
    markerElement.classList.add(type)
    square.append(markerElement)
}