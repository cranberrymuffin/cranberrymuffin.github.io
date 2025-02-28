import React from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import Navigation from '../navigation/Navigation'; // Import the Navigation component
import './home.css'; // Your general styles

export default function Home() {
  return (
    <div>
      <Navigation /> {/* Use Navigation component */}
      <div id="home">
        <Canvas>
          <color attach="background" args={['hotpink']} />
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}
