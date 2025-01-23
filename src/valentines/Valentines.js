import Valentine from './valentine';
import { Canvas } from '@react-three/fiber';
import './home.css';
import { OrbitControls } from '@react-three/drei';
import { DirectionalLight } from 'three';

export default function Valentines() {

    return (<div id="home">
        <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
            <OrbitControls />
            <color attach="background" args={["hotpink"]} />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <directionalLight position={[-10, -10, -10]} intensity={0.5} />
            <Valentine />
        </Canvas></div>)
}