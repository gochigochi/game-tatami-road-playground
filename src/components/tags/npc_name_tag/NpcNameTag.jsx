import { Html } from '@react-three/drei'

const NpcNameTag = ({ position }) => {

  return (
    <Html position={[position.x, position.y + 2.5, position.z]}>
      <div style={{backgroundColor: "#fff"}}>
        hola
      </div>
    </Html>
  )
}

export default NpcNameTag