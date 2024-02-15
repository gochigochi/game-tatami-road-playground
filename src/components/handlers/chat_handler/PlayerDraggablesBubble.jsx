import { useState, useRef, forwardRef } from 'react'
import { Html } from '@react-three/drei'
import { Reorder, motion } from 'framer-motion'
import { bubblePop } from '../../../variants/variants'

const PlayerDraggablesBubble = forwardRef((props, ref) => {

    const [draggables, setDraggables] = useState(props.draggables)

    const handleSubmit = (e) => {

        e.preventDefault()

        props.handleDraggablesSubmit(draggables.join(""))
        
    }

    const giveFocus = () => ref.current.focus()

    // console.log("DRAGGABLES...", draggables)

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
                    style={{ "display": "flex", "gap": ".2rem" }}
                >
                    <Reorder.Group axis="x" values={draggables} onReorder={setDraggables} style={{ listStyleType: "none", display: "flex", gap: ".2rem" }}>
                        {
                            draggables.map(draggable => {
                                return (
                                    <Reorder.Item
                                        key={draggable}
                                        value={draggable}
                                        className="draggable"
                                        onDragStart={giveFocus}
                                        onTap={giveFocus}
                                    >
                                        {draggable}
                                    </Reorder.Item>
                                )
                            })
                        }
                    </Reorder.Group>
                    <form noValidate onSubmit={handleSubmit}>
                        <input
                            ref={ref}
                            name="answ"
                            type="text"
                            className="hidden"
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