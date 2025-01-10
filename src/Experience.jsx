import { OrbitControls } from "@react-three/drei"

export default function Experience() {
    return (
        <Canvas>
            <OrbitControls />
            <mesh>
                <boxGeometry />
                <meshBasicMaterial color="red" />
            </mesh>
        </Canvas>
    );
}

// Render updates for free
// Camera positioning and intrinsics for free