import './tic-tac-toe.css';
import { useState, useEffect } from 'react';
import TicTacToe from './TicTacToe';
import Peer from 'peerjs';
export default function GameIntro() {

    const [gameType, setGameType] = useState(undefined);
    const [isHost, setIsHost] = useState(undefined)
    const [peer, setPeer] = useState(undefined)
    const [code, setCode] = useState(undefined)
    const [joinCode, setJoinCode] = useState(undefined)
    const [conn, setConn] = useState(undefined)
    
    useEffect(() => {
        peer?.on('open', () => {
            setCode(peer.id)
        })
        peer?.on('connection', (conn) => {
            setConn(conn)
        })
    }, [peer])

    const join = () => {
        const conn = peer?.connect(joinCode)
        conn?.on("open", () => {
            setConn(conn)
        })
        console.log('todo')
    }

    if (gameType === undefined) {
        return (<div id="intro" className="container">
            <div className="container">
                <h1>Play tic-tac-toe</h1>
                <div id="options">
                    <button onClick={() => { setGameType(1) }}> against the computer </button>
                    <button onClick={() => { setGameType(2); setPeer(new Peer()) }}> against a friend </button>
                </div>
            </div>
        </div>)
    } else if (gameType === 1) {
        return <TicTacToe />
    } else if (gameType === 2) {
        if (isHost === undefined) {
            return (<div id="intro" className="container">
                <div className="container">
                    <h1>Play tic-tac-toe</h1>
                    <div id="options">
                        <button onClick={() => { setIsHost(true) }}> host new game </button>
                        <button onClick={() => { setIsHost(false) }}> play against a friend </button>
                    </div>
                </div>
            </div>)
        } else if (isHost && !conn) {
            return (<div id="intro" className="container">
                <div className="container">
                    <h1>Play tic-tac-toe</h1>
                    <div id="options">
                        {code}
                    </div>
                </div>
            </div>)
        } else if(!isHost && !conn) {
            return (<div id="intro" className="container">
                <div className="container">
                    <h1>Play tic-tac-toe</h1>
                    <div id="options">
                        <input onChange={(e) => setJoinCode(e.target.value)}/>
                        <button onClick={join}> join </button>
                    </div>
                </div>
            </div>)
        } else if(conn) {
            return <TicTacToe conn={conn} />
        }
    }
}