import { forwardRef, useRef, memo } from "react"
import { RigidBody, CapsuleCollider, CuboidCollider } from "@react-three/rapier"
import { useGLTF, useAnimations } from "@react-three/drei"
import Model from "./Model"
import { useFrame } from "@react-three/fiber"
import { handleCharacterMovement } from "../../lib/handleCharacterMovement"
import { useInput } from "../../hooks/useInput"

const Physics = forwardRef((props, ref) => {

    const group = useRef(null)
    const rotation = useRef(0)
    const body = useRef(null)
    const currentAction = useRef("")
    const newAction = useRef("Idle")
    const isMoving = useRef(false)
    const { input } = useInput()
    const { nodes, materials, animations } = useGLTF("/models/char-v3.glb")
    const { actions } = useAnimations(animations, group)


    useFrame(() => {

        //ADD CONDITION if (gameState === "PLAY")
        handleCharacterMovement(input, body, rotation, ref, isMoving )

        if (isMoving.current) {

            newAction.current = "Walk"

        } else {

            newAction.current = "Idle"
        }

        if (currentAction.current !== newAction.current) {
            actions[currentAction.current]?.fadeOut(0.1)
            actions[newAction.current]?.reset().fadeIn(0.1).play()
            currentAction.current = newAction.current
        }

    })

    return (
        <RigidBody ref={body} enabledRotations={[false, false, false]} colliders={false}>
            <CapsuleCollider args={[.5, .5]} position={[0, 1, 0]} />
            <CuboidCollider
                position={[0, .8, 0]}
                args={[.7, .7, .7]}
                sensor
                onIntersectionEnter={props.handleIntersectionEnter}
                onIntersectionExit={props.handleIntersectionExit}
            />
            <group ref={ref} >
                <Model ref={group} nodes={nodes} materials={materials} />
            </group>
        </RigidBody>
    )
})

useGLTF.preload("/models/char-v3.glb")

export default memo(Physics)