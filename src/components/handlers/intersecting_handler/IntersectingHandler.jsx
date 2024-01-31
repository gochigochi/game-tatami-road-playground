import { useFrame } from "@react-three/fiber"
import { useInput } from "../../../hooks/useInput"
import { useGameMap } from "../../../store/gameMap"
import { useGameState } from "../../../store/gameState"

const IntersectingHandler = ({ intersectingEvent }) => {

    const { input } = useInput()
    const updateGameMap = useGameMap(state => state.updateGameMap)
    const updateGameState = useGameState(state => state.updateGameState)

    useFrame(() => {

        if (intersectingEvent.isPortal && input.current.enter) {
            updateGameMap(intersectingEvent.to)
            input.current.enter = false
        }

        if (intersectingEvent.isNpc && input.current.enter) {
            updateGameState("CHAT")
            input.current.enter = false
        }
    })

    return
}

export default IntersectingHandler