import './tic-tac-toe.css';
import { useState } from 'react';
import TicTacToe from './TicTacToe';

export default function GameIntro() {

    const [gameType, setGameType] = useState(undefined);
    if (gameType === undefined) {
        return (<div id="intro" className="container">
            <div className="container">
                <h1>Play tic-tac-toe</h1>
                <div id="options">
                    <button onClick={() => { setGameType(1) }}> against the computer </button>
                    <button onClick={() => { setGameType(2) }}> against a friend </button>
                </div>
            </div>
        </div>)
    } else if(gameType === 1) {
        return <TicTacToe />
    }
}