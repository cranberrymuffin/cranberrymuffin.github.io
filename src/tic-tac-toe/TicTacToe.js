import './tic-tac-toe.css';
import Square from './Square'
import { useState, useEffect } from 'react';
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
const EMPTY = ""
const initialBoard = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]

export default function TicTacToe(props) {
    const [board, setBoard] = useState(initialBoard)
    const [winningMessage, setWinningMessage] = useState(null)
    const [turn, setTurn] = useState(0)

    useEffect(() => {
        props.conn?.on("data", (data) => {
            data = setBoard(structuredClone(data))
            const nextTurn = data.filter(val => val !== EMPTY).length
            if (nextTurn === 0) {
                setWinningMessage(null)
            }
        })
        props.conn?.on("open", () => {
            props.conn?.send(board)
        })
    }, [])

    useEffect(() => {
        props.conn?.send(board)
        setTurn(board.filter(val => val !== EMPTY).length)
        console.log(board)
    }, [board, props.conn])

    const resetGame = () => {
        if (winningMessage !== null) {
            setBoard(structuredClone(initialBoard))
            setWinningMessage(null)
        }
    }

    const handleClick = (index) => {
        if (winningMessage === null && turn % 2 === props.turn) {
            board[index] = turn % 2 === 0 ? "circle" : "cross"
            setBoard(structuredClone(board))
        }
    }

    const computerTurn = () => {
        for (let i = 0; i < winningCombos.length; i++) {
            const combo = winningCombos[i]
            const pieces = combo.map((x) => board[x])
            if (pieces.filter((piece) => piece === "cross").length === 2 && pieces.filter((piece) => piece === EMPTY).length === 1) {
                board[combo[pieces.indexOf(EMPTY)]] = "cross"
                setBoard(structuredClone(board))
                return
            }
        }

        //block opponent
        for (let i = 0; i < winningCombos.length; i++) {
            const combo = winningCombos[i]
            const pieces = combo.map((x) => board[x])
            if (pieces.filter((piece) => piece === "circle").length === 2 && pieces.filter((piece) => piece === EMPTY).length === 1) {
                board[combo[pieces.indexOf(EMPTY)]] = "cross"
                setBoard(structuredClone(board))
                return
            }
        }

        // random move
        while (board.includes(EMPTY)) {
            let pos = Math.floor(Math.random() * 9);
            if (board[pos] === EMPTY) {
                board[pos] = "cross"
                setBoard(structuredClone(board))
                return
            }
        }
    }

    useEffect(() => {
        let gameOver = false;

        winningCombos.forEach(array => {
            let circleWins = array.every(cell => board[cell] === "circle")
            let crossWins = array.every(cell => board[cell] === "cross")

            if (circleWins) {
                setWinningMessage("circle wins!")
                gameOver = true
            }
            if (crossWins) {
                setWinningMessage("cross wins!")
                gameOver = true
            }
        })

        if (!gameOver) {
            if (!board.includes(EMPTY)) {
                setWinningMessage("no winner")
                gameOver = true
            } else if (!props.conn && turn % 2 === 1) {
                computerTurn()
            }
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