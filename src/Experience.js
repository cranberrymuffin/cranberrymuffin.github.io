import { useLoader, useFrame, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { useRef } from 'react'
import Snowman from './Snowman';

function generateRandomPointInSphere(radius) {
    // Generate random values for phi and theta
    const phi = Math.random() * 2 * Math.PI;
    const theta = Math.acos(2 * Math.random() - 1);

    // Generate a random radius value within the sphere
    const r = Math.cbrt(Math.random()) * radius;

    // Convert spherical coordinates to Cartesian coordinates
    const x = r * Math.sin(theta) * Math.cos(phi);
    const y = r * Math.sin(theta) * Math.sin(phi);
    const z = r * Math.cos(theta);

    return [x, y, z];
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomSnowmanPosition() {
    return [random(-10, 10), random(-10, 10), random(-10, 0)];
}

export default function Experience() {
    useThree(({ camera }) => {
        camera.position.x = 0
        camera.position.y = 0
        camera.position.z = 0
    })

    const snow = useRef()

    useFrame((state, delta) => {
         snow.current.rotation.x -= delta * 0.05
    })

    const colorMap = useLoader(TextureLoader, 'snowflake.png')

    const count = 30000
    const positions = new Float32Array(count * 3)
    const radius = 5

    for (let i = 0; i < count; i += 3) {
        const point = generateRandomPointInSphere(radius)
        positions[i] = point[0]
        positions[i + 1] = point[1]
        positions[i + 2] = point[2]
    }

    const villanPositions = new Float32Array(count * 3)

    for (let i = 0; i < count; i += 3) {
        const point = generateRandomPointInSphere(radius)
        villanPositions[i] = point[0]
        villanPositions[i + 1] = point[1]
        villanPositions[i + 2] = point[2]
    }    

    return <group>
        <points ref={snow}>
            <bufferGeometry >
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>
            <pointsMaterial size={0.1} sizeAttenuation={true} alphaMap={colorMap} transparent={true} depthWrite={false} />
        </points>
        {[...Array(100)].map((x, i) => 
            <Snowman position={generateRandomSnowmanPosition()} evil={true}/>
        )}
        {[...Array(100)].map((x, i) => 
            <Snowman position={generateRandomSnowmanPosition()} evil={false}/>
        )}
        <ambientLight intensity={2} />
    </group>
}