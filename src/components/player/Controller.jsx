import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Physics from './Physics'
import { handleCameraMovement } from '../../lib/handleCameraMovement'
import EventHandler from './EventHandler'
import { useIntersectingEvent } from '../../store/intersectingEvent'

const Controller = () => {

    const playerModel = useRef()
    const intersectingEvent = useIntersectingEvent(state => state.intersectingEvent)

    useFrame((state, delta) => {
        handleCameraMovement(state, playerModel)
    })

    return (
        <>
            <Physics ref={playerModel} />
            { intersectingEvent ? <EventHandler intersectingEvent={intersectingEvent} /> : null }
        </>
    )
}

export default Controller