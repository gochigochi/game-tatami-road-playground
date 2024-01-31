import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Physics from './Physics'
import { handleCameraMovement } from '../../lib/handleCameraMovement'

const Controller = () => {

    const playerModel = useRef()

    useFrame((state, delta) => {
        handleCameraMovement(state, playerModel)
    })

    return (
        <>
            <Physics ref={playerModel} />
        </>
    )
}

export default Controller