import { useIntersectingEvent } from '../../store/intersectingEvent'
import { useGameState } from '../../store/gameState'
import IntersectingHandler from './intersecting_handler/IntersectingHandler'
import ChatHandler from './chat_handler/ChatHandler'

const Handlers = () => {

    const intersectingEvent = useIntersectingEvent(state => state.intersectingEvent)
    const gameState = useGameState(state => state.gameState)

    return (
        <>
            {intersectingEvent && gameState === "PLAY" ? <IntersectingHandler intersectingEvent={intersectingEvent} /> : null}
            {gameState === "CHAT" ? <ChatHandler data={intersectingEvent} /> : null}
        </>
    )
}

export default Handlers