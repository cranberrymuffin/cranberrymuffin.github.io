import React from 'react';
import { useFrame } from '@react-three/fiber';

function Snowman(props) {
  const groupRef = React.useRef();
  

  useFrame((state, delta) => {
    if(groupRef.current.position.z >= 0) {
        groupRef.current.position.x = props.position[0]
        groupRef.current.position.y = props.position[1]
        groupRef.current.position.z = props.position[2]
        groupRef.current.visible = true
    } else {
        groupRef.current.position.z += delta
    }
  });


  return (
    <group ref={groupRef} onClick={() => groupRef.current.visible = false} scale={[0.25,0.25,0.25]} position={props.position}>
      {/* Bottom sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Middle sphere */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color={props.evil ? "red" : "green"} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.2, 2.4, 0.5]}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.2, 2.4, 0.5]}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 2.3, 0.6]}>
        <coneGeometry args={[0.1, 0.3, 32]} />
        <meshStandardMaterial color={props.evil ? "red" : "green"} />
      </mesh>
    </group>
  );
}

export default Snowman;