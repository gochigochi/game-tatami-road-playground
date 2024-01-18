import { AnimatePresence } from "framer-motion"
import { useIntersectingEvent } from "../../store/intersectingEvent"
import MapTag from "./tags/map_tag/MapTag"

const GUIOutcanvas = () => {

  const intersectingEvent = useIntersectingEvent(state => state.intersectingEvent)

  return (
    <AnimatePresence>
      {
        intersectingEvent?.isPortal ?
          <MapTag intersectingEvent={intersectingEvent} /> : null
      }
    </AnimatePresence>
  )
}

export default GUIOutcanvas