const MOVEMENT_SPEED = .2
const LINVEL = 2

export const handleCharacterMovement = (
    input,
    rigidBody,
    rotation,
    character,
    isMoving,
) => {

    const impulse = { x: 0, y: 0, z: 0 }
    let changeRotation = false

    if (input.current.forward && input.current.right && !input.current.backward && !input.current.left) {
        // DIAG UP RIGHT
        impulse.z -= MOVEMENT_SPEED
        impulse.x += MOVEMENT_SPEED
        rigidBody.current?.setLinvel({ x: LINVEL, y: 0, z: -LINVEL })
        changeRotation = true
        rotation.current = Math.PI / 4 + Math.PI / 2
        isMoving.current = true
    } else if (input.current.forward && input.current.left && !input.current.backward && !input.current.right) {
        // DIAG UP LEFT
        impulse.z -= MOVEMENT_SPEED
        impulse.x -= MOVEMENT_SPEED
        rigidBody.current?.setLinvel({ x: -LINVEL, y: 0, z: -LINVEL })
        changeRotation = true
        rotation.current = -Math.PI / 4 - Math.PI / 2
        isMoving.current = true
    } else if (input.current.forward && !input.current.left && !input.current.backward && !input.current.right) {
        // UP
        impulse.z -= MOVEMENT_SPEED
        rigidBody.current?.setLinvel({ x: 0, y: 0, z: -LINVEL })
        changeRotation = true
        rotation.current = Math.PI
        isMoving.current = true
    } else if (input.current.backward && input.current.right && !input.current.forward && !input.current.left) {
        //DIAG BACK RIGHT
        impulse.z += MOVEMENT_SPEED
        impulse.x += MOVEMENT_SPEED
        rigidBody.current?.setLinvel({ x: LINVEL, y: 0, z: LINVEL })
        changeRotation = true
        rotation.current = Math.PI / 4
        isMoving.current = true
    } else if (input.current.backward && input.current.left && !input.current.forward && !input.current.right) {
        //DIAG BACK LEFT
        impulse.z += MOVEMENT_SPEED
        impulse.x -= MOVEMENT_SPEED
        rigidBody.current?.setLinvel({ x: -LINVEL, y: 0, z: LINVEL })
        changeRotation = true
        rotation.current = -Math.PI / 4
        isMoving.current = true
    } else if (input.current.backward && !input.current.left && !input.current.forward && !input.current.right) {
        //BACKWARD
        impulse.z += MOVEMENT_SPEED
        rigidBody.current?.setLinvel({ x: 0, y: 0, z: LINVEL })
        changeRotation = true
        rotation.current = 0
        isMoving.current = true
    } else if (input.current.left && !input.current.forward && !input.current.backward && !input.current.right) {
        // LEFT
        impulse.x -= MOVEMENT_SPEED
        rigidBody.current?.setLinvel({ x: -LINVEL, y: 0, z: 0 })
        changeRotation = true
        rotation.current = -Math.PI / 2
        isMoving.current = true
    } else if (input.current.right && !input.current.forward && !input.current.backward && !input.current.left) {
        //RIGHT
        impulse.x += MOVEMENT_SPEED
        rigidBody.current?.setLinvel({ x: LINVEL, y: 0, z: 0 })
        changeRotation = true
        rotation.current = Math.PI / 2
        isMoving.current = true
    } else {
        isMoving.current = false
    }

    rigidBody.current?.applyImpulse(impulse, true)

    if (changeRotation) character.current.rotation.y = rotation.current
}