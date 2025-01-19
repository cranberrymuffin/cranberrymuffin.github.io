import { Canvas } from '@react-three/fiber';



// Function to generate random points on the surface of a half-sphere
const getRandomPointOnHalfSphere = (radius) => {
    const u = Math.random(); // Random value for latitude
    const theta = Math.random() * Math.PI * 2; // Random value for longitude

    // Convert spherical coordinates to Cartesian coordinates
    const x = radius * Math.cos(theta) * Math.sqrt(1 - u);
    const y = radius * Math.sqrt(u); // Ensure the point is on the top half
    const z = radius * Math.sin(theta) * Math.sqrt(1 - u);

    return [x, y, z];
};

export default function Muffin(props) {

    return (
        <group position={props.position} scale={0.25}>
            {/* Muffin Base */}
            <mesh position={[0, -1, 0]}>
                <cylinderGeometry args={[2.5, 2, 2, 32]} />
                <meshStandardMaterial color="#8b4513" />
            </mesh>

            {/* Muffin Top */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[2.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
                <meshStandardMaterial color="#cd853f" />
            </mesh>
            {/* Cranberries */}
            {Array.from({ length: 15 }).map((_, i) => {
                const [x, y, z] = getRandomPointOnHalfSphere(2.5);
                return (
                    <mesh key={i} position={[x, y, z]}>
                        <sphereGeometry args={[0.2, 16, 16]} />
                        <meshStandardMaterial color="#dc143c" />
                    </mesh>
                );
            })}

        </group>
    );
};

const Scene = () => {
    return (
        <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Muffin />
        </Canvas>
    );
};
