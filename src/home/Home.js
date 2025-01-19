import './home.css';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
export default function Home() {
    return (<div id="home">
        <Canvas>
            <color attach="background" args={["hotpink"]} />
            <Experience />
        </Canvas>
    </div>)
}