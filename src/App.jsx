import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Html, OrbitControls } from '@react-three/drei'
import Map from './components/map/Map'
import GUI from './components/gui/GUI'
import GUIOutcanvas from './components/gui_outcanvas/GUIOutcanvas'
import Handlers from './components/handlers/Handlers'


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
            <GUI />
            <Handlers />
            {/* <Html wrapperClass="wrapperClass">
              <div style={{backgroundColor: "black", color: "white", padding: "1rem"}}>
                hola que tal sdldskjf asldkf laksjdflkj asldkflakfj
              </div>
            </Html> */}
          </Physics>
        </Suspense>
      </Canvas>
      <GUIOutcanvas />
    </>
  )
}

export default App
