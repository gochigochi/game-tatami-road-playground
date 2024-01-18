import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { slideUp } from '../../../../variants/variants'

const styles = {
  backgroundColor: "#fff",
  borderRadius: "25px",
  padding: ".5rem",
  whiteSpace: "pre",
  transform: "translate(-50%, -100%)",
}

const NpcNameTag = ({ data }) => {

  const position = data.group.current.getWorldPosition(new THREE.Vector3)

  return (
    <Html position={[position.x, position.y + 2, position.z]}>
      <motion.div
        key="box"
        variants={slideUp}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <p style={styles}>
          {data.name}
        </p>
      </motion.div>
    </Html>
  )
}

export default NpcNameTag