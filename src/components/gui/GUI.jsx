import { AnimatePresence } from "framer-motion"
import { useIntersectingEvent } from "../../store/intersectingEvent"
import NpcNameTag from "./tags/npc_name_tag/NpcNameTag"
import { useGameState } from "../../store/gameState"

const GUI = () => {

  const intersectingEvent = useIntersectingEvent(state => state.intersectingEvent)
  const gameState = useGameState(state => state.gameState)

  return (
    <AnimatePresence>
      {
        intersectingEvent?.isNpc && gameState === "PLAY" ?
          <NpcNameTag data={intersectingEvent} /> : null
      }
    </AnimatePresence>
  )
}

export default GUI