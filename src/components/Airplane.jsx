import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';

export function Airplane(props) {
  const { nodes, materials } = useGLTF('./models/airplane/model.glb');
  const helix = useRef();
  const HELIX_SPEED = 10;

  // Animation
  const { position, opacity } = useSpring({
    from: { position: [0, -1, 0], opacity: 0 },
    to: { position: [0, 0, 0], opacity: 1 },
    config: { mass: 1, tension: 120, friction: 50 },
    delay: 100, // optional slight delay
  });

  useFrame((_state, delta) => {
    if (helix.current) {
      helix.current.rotation.x += delta * HELIX_SPEED;
    }
  });

  return (
    <a.group {...props} position={position} dispose={null}>
      <a.mesh 
        geometry={nodes.PUSHILIN_Plane_Circle000.geometry} 
        material={materials.plane} 
        material-transparent
        material-opacity={opacity}
      />
      <a.mesh 
        ref={helix} 
        geometry={nodes.PUSHILIN_Plane_Helix.geometry} 
        material={materials.plane} 
        position={[1.09, 0.23, 0]}
        material-transparent
        material-opacity={opacity}
      />
    </a.group>
  );
}

useGLTF.preload('./models/airplane/model.glb');
