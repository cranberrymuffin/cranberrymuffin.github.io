import { Text3D, Center, useMatcapTexture } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier'
import Muffin from './muffin';
import { useThree } from '@react-three/fiber';
const generateRandomMuffinPosition = (camera, i) => {

    const depth = 5

    const vFOV = (camera.fov * Math.PI) / 180; // Convert FOV to radians
    const height = 2 * Math.tan(vFOV / 2) * depth; // Frustum height at depth

    const x = i; // Random X coordinate
    const y = height + (5 + i);
    return [x, y, -depth]; // Negative depth for forward in camera space
};

export default function Experience() {
    const [matCapTexture] = useMatcapTexture('89204B_17080D_DA4377_F780B5', 256)
    const { camera } = useThree();

    const positions = Array.from({ length: 5 }).map((_, index) => generateRandomMuffinPosition(camera, index) )

    return (<>
        <directionalLight castShadow position={[13, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />
        <Physics>
            <Center position-z={-5} top>
                <RigidBody type="fixed">
                    <Text3D font="./fonts/Bartex_Regular.json">
                        CranberryMuffin
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

            {positions.map((pos, index) => {
                return (<RigidBody key={'muffin-' + index} >
                    <Muffin position={pos} />
                </RigidBody>);
            })}
        </Physics>
    </>)
}