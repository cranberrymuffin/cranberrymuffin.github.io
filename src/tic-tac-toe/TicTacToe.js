import './tic-tac-toe.css';
import Square from './Square'
import { useState, useEffect } from 'react';
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
const EMPTY = ""
export default function TicTacToe() {
    const [board, setBoard] = useState([EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY])
    const [winningMessage, setWinningMessage] = useState(null)
    const [turn, setTurn] = useState(0)

    const handleClick = (index) => {
        if (winningMessage === null && board[index] === EMPTY && turn % 2 === 0) {
            board[index] = "circle"
            setBoard(board)
            setTurn(turn + 1)
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
        while (true) {
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
        winningCombos.forEach(array => {
            let circleWins = array.every(cell => board[cell] === "circle")
            if (circleWins) {
                setWinningMessage("circle wins!")
                return
            }
        })
        winningCombos.forEach(array => {
            let crossWins = array.every(cell => board[cell] === "cross")
            if (crossWins) {
                setWinningMessage("cross wins!")
                return
            }
        })

        if (!board.includes(EMPTY)) {
            setWinningMessage("no winner")
        }
    }, [turn])

    useEffect(() => {
        if (turn % 2 === 1) {
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
        </div>
    );
}