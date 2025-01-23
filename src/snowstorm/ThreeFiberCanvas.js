import Experience from './Experience';
import { Canvas } from '@react-three/fiber'
import { memo } from 'react';
import './snowstorm.css';

const ThreeFiberCanvas = memo(function ThreeFiberCanvas() {
    return <div id="snowstorm">
        <Canvas>
            <color attach="background" args={["black"]} />
            <Experience />
        </Canvas>
    </div>
})

export default ThreeFiberCanvas