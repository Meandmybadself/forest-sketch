import { render } from 'react-dom'
import React, { Suspense } from 'react'
import { Canvas, useFrame, useUpdate, useLoader } from 'react-three-fiber'
import './styles.css'
import img from '../public/bit.png'
import * as THREE from 'three'

const TreeBit = () => {
  const texture = useLoader(THREE.TextureLoader, img)
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" map={texture} toneMapped={false} />
    </mesh>
  )
}

// function Detailed({ children, distances }) {
//   const ref = useUpdate(lod => lod.children.forEach((object, index) => lod.levels.push({ object, distance: distances[index] })), [])
//   useFrame(state => ref.current.update(state.camera))
//   return <lOD ref={ref}>{children}</lOD>
// }

// function Dolly() {
//   useFrame(state => {
//     state.camera.position.z = 50 + Math.sin(state.clock.getElapsedTime()) * 30
//     state.camera.updateProjectionMatrix()
//   })
//   return null
// }

function App() {
  const texture = useLoader(THREE.TextureLoader, img)

  return (
    <Canvas color={'#CC0000'} gl={{ alpha: false }}>
      {/* <ambientLight /> */}
      {texture && <TreeBit texture={texture} />}

      {/* <Detailed distances={[0, 30, 60]}>
        <mesh>
          <icosahedronBufferGeometry attach="geometry" args={[10, 3]} />
          <meshBasicMaterial attach="material" color="hotpink" wireframe />
        </mesh>
        <mesh>
          <icosahedronBufferGeometry attach="geometry" args={[10, 2]} />
          <meshBasicMaterial attach="material" color="lightgreen" wireframe />
        </mesh>
        <mesh>
          <icosahedronBufferGeometry attach="geometry" args={[10, 1]} />
          <meshBasicMaterial attach="material" color="lightblue" wireframe />
        </mesh>
      </Detailed> */}
      {/* <Dolly /> */}
    </Canvas>
  )
}

render(
  <Suspense fallback={null}>
    <App />
  </Suspense>,
  document.querySelector('#root')
)
