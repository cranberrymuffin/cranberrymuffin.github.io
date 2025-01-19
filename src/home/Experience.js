import { Text3D, Center, useMatcapTexture } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier'
import Muffin from './muffin';
import { useThree } from '@react-three/fiber';
const generateRandomMuffinPosition = (camera, i) => {

    const depth = 5

    const aspect = camera.aspect;
    const vFOV = (camera.fov * Math.PI) / 180; // Convert FOV to radians
    const height = 2 * Math.tan(vFOV / 2) * depth; // Frustum height at depth
    const width = height * aspect; // Frustum width at depth

    const x = (Math.random() - 0.5) * width; // Random X coordinate
    const y = height + (5 + i);
    return [x, y, -depth]; // Negative depth for forward in camera space
};

export default function Experience() {
    const [matCapTexture] = useMatcapTexture('89204B_17080D_DA4377_F780B5', 256)
    const { camera } = useThree();

    return (<>
        <directionalLight castShadow position={[13, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />
        <Physics>
            <Center position-z={-5} top>
                <RigidBody type="fixed">
                    <Text3D font="./fonts/Bartex_Regular.json">
                        cranberrymuffin
                        <meshMatcapMaterial matcap={matCapTexture} />
                    </Text3D>
                </RigidBody>
            </Center>
            <RigidBody type="fixed">
                <mesh receiveShadow position-y={-5}>
                    <boxGeometry args={[1000, 0.5, 1000]} />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
            </RigidBody>

            {Array.from({ length: 50 }).map((_, index) => {
                return (<RigidBody key={'muffin-' + index} >
                    <Muffin position={generateRandomMuffinPosition(camera, index)} />
                </RigidBody>);
            })}
        </Physics>
    </>)
}