import { useRef, useCallback } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import Physics from './Physics'
import { handleCameraMovement } from '../../lib/handleCameraMovement'
import { useInterNpc } from '../../store/interNpc'

const Controller = () => {

    const playerModel = useRef()
    const updateInterNpcData = useInterNpc(state => state.updateInterNpcData)

    useFrame((state, delta) => {
        handleCameraMovement(state, playerModel)
    })

    const handleIntersectionEnter = useCallback((payload) => {
        const { id, name, scripts, group } = payload.other.rigidBodyObject.data
        const npcWorldPosition = group.current.getWorldPosition(new THREE.Vector3)
        updateInterNpcData({
            id: id,
            name: name,
            scripts: scripts,
            position: npcWorldPosition,
        })
    })

    const handleIntersectionExit = useCallback(() => {
        updateInterNpcData({})
    })

    return (
        <Physics
            ref={playerModel}
            handleIntersectionEnter={handleIntersectionEnter}
            handleIntersectionExit={handleIntersectionExit}
        />
    )
}

export default Controller