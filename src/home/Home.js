import './home.css';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
export default function Home() {
    return (
        <div>
            <div id="nav">
                <a id="nav-element" href="/#/resume">resume</a>
                <a  id="nav-element" href="/#/snowstorm">snowstorm</a>
                <a  id="nav-element" href="/#/tic-tac-toe">tic-tac-toe</a>
                <a  id="nav-element" href="/#/valentines">valentines</a>
            </div>
            <div id="home">
                <Canvas>
                    <color attach="background" args={["hotpink"]} />
                    <Experience />
                </Canvas>
            </div>
        </div>
    )
}