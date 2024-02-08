import { Html } from '@react-three/drei'
import { motion } from 'framer-motion'
import DOMPurify from 'dompurify'
import { bubblePop } from '../../../variants/variants'

const NpcBubble = ({
    npcPosition,
    text,
    flipped,
}) => {

    return (
        <>
            <Html 
                wrapperClass="bubble-wrapper"
                position={[npcPosition.x, npcPosition.y + 2, npcPosition.z]}
            >
                <motion.div
                    className="bubble-motion-wrapper"
                    key="box"
                    variants={bubblePop}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className={`bubble ${flipped ? "flipped" : ""}`}>
                        <div 
                            className={`text ${flipped ? "flipped" : ""}`} 
                            dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(text)}} 
                        />
                    </div>
                </motion.div>
            </Html>
        </>
    )
}

export default NpcBubble