import './tic-tac-toe.css';
import Square from './Square'
import { useState, useEffect } from 'react';

export default function TicTacToe() {
    const [cells, setCells] = useState(["","","","","","","","",""])
    const [go, setGo] = useState("circle")
    const [winningMessage, setWinningMessage] = useState(null)

    const message = "it is now " + go +"'s go"

    const checkScore = () => {
        const winningCombos = [
            [0,1,2], [3,4,5], [6,7,8],[0,3,6],[1,4,7], [2,5,8], [0,4,8], [2,4,6]
        ]
        winningCombos.forEach(array => {
            let circleWins = array.every(cell => cells[cell] === "circle")
            if(circleWins) {
                setWinningMessage("circle wins!")
                return
            }
        })
        winningCombos.forEach(array => {
            let crossWins = array.every(cell => cells[cell] === "cross")
            if(crossWins) {
                setWinningMessage("cross wins!")
                return
            }
        })
    }

    useEffect(() => {
        checkScore()
    }, [cells])

    return (
        <div className="container">
            <div id="you"></div>
            <div id="opponent"></div>
            <h1 id="info">{ winningMessage || message }</h1>
            <div id="game" className="game">
                {cells.map((square, index) => <Square key={index} id={index} go={go} setGo={setGo} setCells={setCells} cells={cells} winningMessage={winningMessage}/>)}
            </div>
        </div>
    );
}