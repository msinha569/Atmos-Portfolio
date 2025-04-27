import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './components/Experience'
import { ScrollControls } from '@react-three/drei'
import { usePlay } from './context/Play'
import { Overlay } from './components/Overlay'

const App = () => {
  const {play} = usePlay()
  return (
    <>
     {!play && <Overlay />} {/* <-- Always mounted */}
      <Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={50} damping={1}>
          { <Experience />}
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
