import * as THREE from 'three'
import { render } from 'react-dom'
import React, { Suspense } from 'react'
import { Canvas, useLoader } from 'react-three-fiber'
import './styles.css'
import img from '../public/bit.png'

const TreeBit = () => {
  const texture = useLoader(THREE.TextureLoader, img)
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[4, 4]} />
      <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
    </mesh>
  )
}

function App() {
  return (
    <Canvas colorManagement>
      <Suspense fallback={null}>
        <TreeBit />
      </Suspense>
    </Canvas>
  )
}

render(<App />, document.getElementById('root'))
