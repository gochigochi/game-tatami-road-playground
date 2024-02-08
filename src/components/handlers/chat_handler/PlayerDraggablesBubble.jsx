import { useState, useRef, forwardRef } from 'react'
import { Html } from '@react-three/drei'
import { motion } from 'framer-motion'
import { bubblePop } from '../../../variants/variants'

const PlayerDraggablesBubble = forwardRef((props, ref) => {

    const [draggablesState, setDraggablesState] = useState(props.draggables)
    const [parsedDraggables, setParsedDraggables] = useState(props.draggables.join(""))
    const dragged = useRef()
    const draggedOver = useRef()

    const handleSubmit = (e) => {
        
        e.preventDefault()

        props.handleDraggablesSubmit(draggablesState)
    }

    const handleDragStart = (draggable) => dragged.current = draggable

    const handleDragEnter = (draggable) => draggedOver.current = draggable

    const handleDragEnd = () => {

        const draggedIndex = draggablesState.indexOf(dragged.current)
        const draggedOverIndex = draggablesState.indexOf(draggedOver.current)
        const draggablesCopy = [...draggablesState]

        draggablesCopy[draggedOverIndex] = draggablesCopy.splice(draggedIndex, 1, draggablesCopy[draggedOverIndex])[0]
        setDraggablesState(draggablesCopy)
        setParsedDraggables(draggablesCopy.join(""))
        ref.current.focus()
    }


    // console.log("DRAGGABLES STATE>.....", draggablesState)
    console.log("DRAGGABLES STATE>.....", parsedDraggables)

    return (
        <Html
            wrapperClass="bubble-wrapper"
            position={[props.playerPosition.x, props.playerPosition.y + 2, props.playerPosition.z]}
        >
            <motion.div
                className="bubble-motion-wrapper"
                key="box"
                variants={bubblePop}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div
                    className={`bubble ${props.flipped ? "flipped" : ""}`}
                    styles={{ "display": "flex", "gap": ".2rem" }}
                >
                    {
                        draggablesState.map(draggable => {
                            return (
                                <motion.span
                                    key={draggable}
                                    className="draggable"
                                    draggable="true"
                                    droppable="true"
                                    onDragStart={() => handleDragStart(draggable)}
                                    onDragEnter={() => handleDragEnter(draggable)}
                                    onDragEnd={handleDragEnd}
                                >
                                    {draggable}
                                </motion.span>
                            )
                        })
                    }
                    <form
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <input
                            ref={ref}
                            name="answ"
                            type="text"
                            value={parsedDraggables}
                            className='hidden'
                            autoFocus
                            readOnly
                        />
                    </form>
                </div>
            </motion.div>
        </Html>
    )
})

export default PlayerDraggablesBubble