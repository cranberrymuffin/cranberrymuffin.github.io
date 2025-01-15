import Peer from 'peerjs';
import {
    useEffect,
    useState,
} from "react";
import TicTacToe from './tic-tac-toe';

const peer = new Peer();

export default function TwoPlayerGame() {
    const [selfPeerId, setSelfPeerId] = useState(undefined);
    const [hostPeerId, setHostPeerId] = useState(undefined);
    const [conn, setConn] = useState(undefined);

    useEffect(() => {
        peer.on("open", (id) => {
            setSelfPeerId(id);
        });

        peer.on("connection", (conn) => {
            setConn(conn)
        })
    }, [])

    useEffect(() => {
        conn?.on("data", (data) => {
            console.log(data)
            conn?.send("data sent via peerjs");
        })
        conn?.send("data sent via peerjs");
    }, [conn]);

    const join = () => {
        if (hostPeerId !== undefined) {
            const conn = peer.connect(hostPeerId);

            conn.on("open", () => {
                setConn(conn);
            })
        }
    }

    return !conn ? (<div>
        <h1>{selfPeerId}</h1>
        <input onChange={(event) => setHostPeerId(event.target.value)} />
        <button onClick={join}>join game</button>
    </div>) : (<TicTacToe conn={conn} />)
}