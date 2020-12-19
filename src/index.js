import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { render } from 'react-dom'
import React, { Suspense, useEffect } from 'react'
import { Canvas, useLoader, useThree } from 'react-three-fiber'
import './styles.css'
import img from '../public/bit.png'

const TreeBit = () => {
  console.log('1')
  const texture = useLoader(TextureLoader, img)
  console.log('2')
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[4, 4]} />
      <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
    </mesh>
  )
}

const Scene = () => {
  // const {camera} = useThree()

  // // useEffect(() => {
  // //   camera.
  // // }, [])

  return <TreeBit />
}

function App() {
  return (
    <Canvas
      camera={{
        // fov: 75,
        // rotation: [THREE.MathUtils.degToRad(45), 0, 0],
        position: [0, 0, 10]
      }}
      colorManagement>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}

render(<App />, document.getElementById('root'))
