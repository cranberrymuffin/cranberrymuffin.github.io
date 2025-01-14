import Experience from './Experience';
import { Canvas } from '@react-three/fiber'
import './snowstorm.css';

export default function Snowstorm() {
    return <Canvas>
        <color attach="background" args={["black"]} />
        <Experience />
    </Canvas>
}