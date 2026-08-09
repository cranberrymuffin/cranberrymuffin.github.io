import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import './home.css';

export default function Animation() {
  return (
    <div id="home">
      <Canvas>
        <color attach="background" args={['hotpink']} />
        <Experience />
      </Canvas>
    </div>
  );
}
