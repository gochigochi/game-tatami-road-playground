import { Html } from '@react-three/drei'
import { motion } from 'framer-motion'
import { bubblePop } from '../../../variants/variants'
import { forwardRef } from 'react'

const PlayerInputBubble = forwardRef((props, ref) => {

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
                <div className={`bubble ${props.flipped ? "flipped" : ""}`}>
                    <form noValidate onSubmit={props.handleInputSubmit}>
                        <input
                            type="text"
                            name="input"
                            ref={ref}
                            autoFocus
                            autoComplete="off"
                            className={`input-bubble ${props.flipped ? "flipped" : ""}`}
                        />
                        {/* <textarea
                                type="text"
                                name="input"
                                ref={ref}
                                autoFocus
                                autoComplete="off"
                                className={`input-bubble ${props.flipped ? "flipped" : ""}`}
                            /> */}
                    </form>
                </div>
            </motion.div>
        </Html>
    )
})

export default PlayerInputBubble