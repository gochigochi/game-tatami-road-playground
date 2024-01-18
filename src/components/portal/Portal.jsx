import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useIntersectingEvent } from "../../store/intersectingEvent"

const Portal = ({ to, tag, ...props }) => {

    const updateIntersectingEvent = useIntersectingEvent(state => state.updateIntersectingEvent)

    const handleIntersectionEnter = () => {
        updateIntersectingEvent({ isPortal: true, to: to, tag: tag })
    }

    const handleIntersectionExit = () => {
        updateIntersectingEvent(null)
    }

    return (
        <RigidBody type="fixed" colliders={false} >
            <mesh />
            <CuboidCollider
                sensor
                onIntersectionEnter={handleIntersectionEnter}
                onIntersectionExit={handleIntersectionExit}
                {...props}
            />
        </RigidBody>
    )
}

export default Portal