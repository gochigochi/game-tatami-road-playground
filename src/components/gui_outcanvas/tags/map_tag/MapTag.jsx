import { motion } from 'framer-motion'
import { slideUp } from '../../../../variants/variants'

const styles = {
  position: "fixed",
  top: "1rem",
  left: "50%",
  backgroundColor: "#fff",
  borderRadius: "25px",
  padding: ".5rem .7rem",
  whiteSpace: "pre",
  transform: "translateX(-50%)",
}

const MapTag = ({ intersectingEvent }) => {

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="animate"
      exit="exit"
      style={styles}
    >
        {intersectingEvent.tag}
    </motion.div>
  )
}

export default MapTag