import { useFrame } from "@react-three/fiber"
import { useInput } from "../../hooks/useInput"
import { useGameMap } from "../../store/gameMap"

const EventHandler = ({ intersectingEvent }) => {

    const { input } = useInput()
    const updateGameMap = useGameMap(state => state.updateGameMap)

    useFrame(() => {

        if (intersectingEvent.isPortal && input.current.enter) {
            updateGameMap(intersectingEvent.to)
            input.current.enter = false
        }

        if (intersectingEvent.isNpc && input.current.enter) {
            console.log("Start conversation")
            input.current.enter = false
        }
    })

    return
}

export default EventHandler