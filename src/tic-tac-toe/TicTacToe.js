import './tic-tac-toe.css';
import Square from './Square'
import { useState, useEffect } from 'react';
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
const EMPTY = ""
export default function TicTacToe(props) {
    const [board, setBoard] = useState([EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY])
    const [winningMessage, setWinningMessage] = useState(null)
    const [turn, setTurn] = useState(0)

    useEffect(() => {
        props.conn?.on("data", (data) => {
            setBoard(data)
            const nextTurn = data.filter(val => val !== EMPTY).length
            setTurn(nextTurn)
            if (nextTurn === 0) {
                setWinningMessage(null)
            }
        })
        props.conn?.on("open", () => {
            props.conn?.send(board)
        })
    }, [])

    const resetGame = () => {
        if (winningMessage !== null) {
            const nextBoard = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
            setBoard(nextBoard)
            setTurn(0)
            setWinningMessage(null)
            props.conn?.send(nextBoard)
        }
    }

    const handleClick = (index) => {
        if (winningMessage === null && board[index] === EMPTY && turn % 2 === props.turn) {
            board[index] = turn % 2 === 0 ? "circle" : "cross"
            setTurn(board.filter(val => val !== EMPTY).length)
            setBoard(board)
            props.conn?.send(board)
        }
    }

    const computerTurn = () => {
        for (let i = 0; i < winningCombos.length; i++) {
            const combo = winningCombos[i]
            const pieces = combo.map((x) => board[x])
            if (pieces.filter((piece) => piece === "cross").length === 2 && pieces.filter((piece) => piece === EMPTY).length === 1) {
                board[combo[pieces.indexOf(EMPTY)]] = "cross"
                setBoard(board)
                setTurn(turn + 1)
                return
            }
        }

        //block opponent
        for (let i = 0; i < winningCombos.length; i++) {
            const combo = winningCombos[i]
            const pieces = combo.map((x) => board[x])
            if (pieces.filter((piece) => piece === "circle").length === 2 && pieces.filter((piece) => piece === EMPTY).length === 1) {
                board[combo[pieces.indexOf(EMPTY)]] = "cross"
                setBoard(board)
                setTurn(turn + 1)
                return
            }
        }

        // random move
        while (board.includes(EMPTY)) {
            let pos = Math.floor(Math.random() * 9);
            if (board[pos] === EMPTY) {
                board[pos] = "cross"
                setBoard(board)
                setTurn(turn + 1)
                return
            }
        }
    }

    useEffect(() => {
        let gameOver = false;
        winningCombos.forEach(array => {
            let circleWins = array.every(cell => board[cell] === "circle")
            if (circleWins) {
                setWinningMessage("circle wins!")
                gameOver = true
            }
        })
        winningCombos.forEach(array => {
            let crossWins = array.every(cell => board[cell] === "cross")
            if (crossWins) {
                setWinningMessage("cross wins!")
                gameOver = true
            }
        })
        if (!board.includes(EMPTY)) {
            setWinningMessage("no winner")
            gameOver = true
        }
        if (!gameOver && !props.conn && turn % 2 === 1) {
            computerTurn()
        }
    }, [turn])

    return (
        <div className="container">
            <div id="you"></div>
            <div id="opponent"></div>
            <h1 id="info">{winningMessage}</h1>
            <div id="game" className="game">
                {board.map((_, index) => <Square key={index} data={board[index]} handleClick={() => handleClick(index)} />)}
            </div>
            <button onClick={resetGame}>play again</button>
        </div>
    );
}