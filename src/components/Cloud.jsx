import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";
import { useSpring, animated } from "@react-spring/three"; // still needed for opacity animation

export function Cloud({ sceneOpacity, ...props }) {
  const { nodes } = useGLTF("./models/cloud/model.gltf");
  const materialRef = useRef();

  // 🎯 Only animate opacity
  const { opacity } = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {mass: 1, tension: 120, friction: 150  },
    delay: 100,
  });

  // Update material opacity with spring
  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.opacity = opacity.get();
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball001.geometry}>
        <meshStandardMaterial
          ref={materialRef}
          onBeforeCompile={fadeOnBeforeCompile}
          envMapIntensity={2}
          transparent
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/cloud/model.gltf");
