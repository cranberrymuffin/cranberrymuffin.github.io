import { Text3D, OrbitControls, Center, useMatcapTexture } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
import Muffin from './muffin';
import { useThree } from '@react-three/fiber';
const generateRandomMuffinPosition = (camera) => {

    const minDepth = 5
    const maxDepth = 15
    const depth =  Math.floor(Math.random() * (maxDepth - minDepth + 1)) + minDepth;

    const aspect = camera.aspect;
    const vFOV = (camera.fov * Math.PI) / 180; // Convert FOV to radians
    const height = 2 * Math.tan(vFOV / 2) * depth; // Frustum height at depth
    const width = height * aspect; // Frustum width at depth

    const x = (Math.random() - 0.5) * width; // Random X coordinate
    const y = (Math.random()) * height + 5; // Random Y coordinate
    return [x, y, -depth]; // Negative depth for forward in camera space
  };

export default function Experience() {
    const text = useRef()
    const textJump = () => {
        text.current.applyImpulse({ x: 0, y: 5, z: 0 })
    }
    const [matCapTexture] = useMatcapTexture('89204B_17080D_DA4377_F780B5', 256)
    const { camera } = useThree();

    return (<>
        <OrbitControls />
        <directionalLight castShadow position={[13, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />
        <Physics>
            <Center>
                <RigidBody ref={text} type="fixed">
                    <Text3D font="./fonts/Bartex_Regular.json" onClick={textJump}>
                        cranberrymuffin
                        <meshMatcapMaterial matcap={matCapTexture} />
                    </Text3D>
                </RigidBody>

            </Center>
            <RigidBody type="fixed">
                <mesh receiveShadow position-y={-5}>
                    <boxGeometry args={[100, 0.5, 100]} />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
            </RigidBody>

            {Array.from({ length: 50 }).map((_, index) => {
                return <RigidBody key={'muffin-' + index} >< Muffin position={generateRandomMuffinPosition(camera)} /></RigidBody>
            }
            )}

        </Physics>
    </>)
}