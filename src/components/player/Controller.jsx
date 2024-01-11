import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import Physics from './Physics'

const Controller = () => {

    const playerModel = useRef()

    useFrame((state, delta) => {

    })

    return (
        <Physics ref={playerModel} />
    )
}

export default Controller