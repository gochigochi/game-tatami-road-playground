import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { OrbitControls } from '@react-three/drei'
import Map from './components/map/Map'


function App() {

  const [debugMode, setDebugMode] = useState(false)

  return (
    <>
      <button id="debug-btn" onClick={(() => setDebugMode(!debugMode))}>Debug</button>
      <Canvas id="three-canvas" shadows camera={{ position: [0, 8, 10], fov: 50 }}>
        <OrbitControls makeDefault />
        <Suspense fallback={null}>
          <Physics debug={debugMode}>
            <Map />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
