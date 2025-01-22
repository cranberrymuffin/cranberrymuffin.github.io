import Valentine from './valentine';
import { Canvas } from '@react-three/fiber';
import './home.css';

export default function Valentines() {

    return (<div id="home">
        <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
            <color attach="background" args={["hotpink"]} />
            <ambientLight intensity={2} />
            <Valentine />
        </Canvas></div>)
}