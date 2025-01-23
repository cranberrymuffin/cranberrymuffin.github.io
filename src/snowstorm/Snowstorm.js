
import './snowstorm.css';
import { useState, createContext } from 'react';
import ThreeFiberCanvas from './ThreeFiberCanvas';


export const Context = createContext();

export default function Snowstorm() {
    const [points, setPoints] = new useState(0);

    const increasePoints = () => {
        setPoints(points + 1)
    }

    const decreasePoints = () => {
        setPoints(points - 1)
    }

    return <div>
        <div id="nav">
            Instructions: Destroy red snowmen to gain points. Do not destroy green snowmen or you will lose points.
        </div>
        <div id="nav">
            points: {points}
        </div>
        <Context.Provider value={[increasePoints, decreasePoints]}>
            <ThreeFiberCanvas />
        </Context.Provider>
    </div>

}