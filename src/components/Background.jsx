import { Environment, Sphere } from '@react-three/drei';
import { Gradient, LayerMaterial } from 'lamina';
import React from 'react';
import * as THREE from 'three';

const Background = () => {
  return (
    <>
      <Sphere scale={[200, 200, 200]} rotation-y={Math.PI / 2}>
        <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
          <Gradient 
            colorA="#6a0dad" // Purple
            colorB="#3498db" // Blue
            axes="y" 
          />
        </LayerMaterial>
      </Sphere>

      <Environment resolution={256} frames={Infinity}>
        <Sphere
          scale={[100, 100, 100]}
          rotation-y={Math.PI / 2}
          rotation-x={Math.PI}
        >
          <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
            <Gradient 
              colorA="#6a0dad" // Purple
              colorB="#3498db" // Blue
              axes="y" 
            />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  );
};

export default Background;
