import './tic-tac-toe.css';
import Square from './Square'
import { useState, useEffect } from 'react';
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]
const EMPTY = ""
export default function TicTacToe() {
    const [cells, setCells] = useState([EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY])
    const [winningMessage, setWinningMessage] = useState(null)
    const [turn, setTurn] = useState(0)

    const handleClick = (index) => {
        console.log(turn)
        if (winningMessage === null && cells[index] === EMPTY && turn % 2 === 0) {
            cells[index] = "circle"
            setCells(cells)
            setTurn(turn + 1)
        }
    }

    const computerTurn = () => {
        for (let i = 0; i < winningCombos.length; i++) {
            const combo = winningCombos[i]
            const pieces = combo.map((x) => cells[x])
            if (pieces.filter((piece) => piece === "cross").length === 2 && pieces.filter((piece) => piece === EMPTY).length === 1) {
                cells[combo[pieces.indexOf(EMPTY)]] = "cross"
                setCells(cells)
                setTurn(turn + 1)
                return
            }
        }

        //block opponent
        for (let i = 0; i < winningCombos.length; i++) {
            const combo = winningCombos[i]
            const pieces = combo.map((x) => cells[x])
            if (pieces.filter((piece) => piece === "circle").length === 2 && pieces.filter((piece) => piece === EMPTY).length === 1) {
                cells[combo[pieces.indexOf(EMPTY)]] = "cross"
                setCells(cells)
                setTurn(turn + 1)
                return
            }
        }

        // random move
        while (true) {
            let pos = Math.floor(Math.random() * 9);
            if (cells[pos] === EMPTY) {
                cells[pos] = "cross"
                setCells(cells)
                setTurn(turn + 1)
                return
            }
        }
    }

    useEffect(() => {
        winningCombos.forEach(array => {
            let circleWins = array.every(cell => cells[cell] === "circle")
            if (circleWins) {
                setWinningMessage("circle wins!")
                return
            }
        })
        winningCombos.forEach(array => {
            let crossWins = array.every(cell => cells[cell] === "cross")
            if (crossWins) {
                setWinningMessage("cross wins!")
                return
            }
        })

        if (!cells.includes(EMPTY)) {
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
                {cells.map((square, index) => <Square key={index} data={cells[index]} handleClick={() => handleClick(index)} />)}
            </div>
        </div>
    );
}