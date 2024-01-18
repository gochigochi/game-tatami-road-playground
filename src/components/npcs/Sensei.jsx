import { useState, useEffect, useRef, memo, useCallback } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import { CapsuleCollider, CuboidCollider, RigidBody } from "@react-three/rapier"
import { useIntersectingEvent } from "../../store/intersectingEvent"

const position = [-1, 1, 1]
const rotation = [0, -Math.PI / 4, 0]
const type = "kinematicPosition"

const Sensei = (props) => {

    const [data, setData] = useState({})
    const updateIntersectingEvent = useIntersectingEvent(state => state.updateIntersectingEvent)
    const body = useRef()
    const group = useRef()
    const { nodes, materials, animations } = useGLTF("/models/npc-sensei-tatami-room-lvl1-v5.glb")
    const { actions } = useAnimations(animations, group)

    useEffect(() => {

        actions["Idle"].play()

        setData({
            ...props.data,
            isNpc: true,
            group: group,
        })

    }, [])

    const handleIntersectionEnter = useCallback((payload) => {
        const eventData = payload.target.rigidBodyObject.data
        updateIntersectingEvent(eventData)
    })

    const handleIntersectionExit = useCallback(() => {
        updateIntersectingEvent(null)
    })

    return (
        <RigidBody
            ref={body}
            enabledRotations={[false, false, false]}
            position={[-1, 0, 0]}
            // rotation={rotation}
            colliders={false}
            // type={type}
            data={data}
        >
            <CapsuleCollider args={[.5, .5]} position={[0, 1, 0]} />
            <CuboidCollider
                position={[0, .8, 0]}
                args={[.7, .7, .7]}
                sensor
                onIntersectionEnter={handleIntersectionEnter}
                onIntersectionExit={handleIntersectionExit}
            />
            <group ref={group} {...props} dispose={null}>
                <group name="Scene">
                    <group name="metarig">
                        <skinnedMesh
                            castShadow
                            receiveShadow
                            name="Body"
                            geometry={nodes.Body.geometry}
                            material={materials.Skin}
                            skeleton={nodes.Body.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            receiveShadow
                            name="HairAlt"
                            geometry={nodes.HairAlt.geometry}
                            material={materials.Hair}
                            skeleton={nodes.HairAlt.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            receiveShadow
                            name="Pants"
                            geometry={nodes.Pants.geometry}
                            material={materials.Short}
                            skeleton={nodes.Pants.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            receiveShadow
                            name="Roundcube"
                            geometry={nodes.Roundcube.geometry}
                            material={materials.Hair}
                            skeleton={nodes.Roundcube.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            receiveShadow
                            name="Shirt"
                            geometry={nodes.Shirt.geometry}
                            material={materials.Shirt}
                            skeleton={nodes.Shirt.skeleton}
                        />
                        <primitive object={nodes.spine} />
                    </group>
                </group>
            </group>
        </RigidBody>

    )
}

useGLTF.preload("/models/npc-sensei-tatami-room-lvl1-v5.glb");

export default memo(Sensei)