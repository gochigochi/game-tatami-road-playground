import { Html } from '@react-three/drei'
import { motion } from 'framer-motion'
import DOMPurify from 'dompurify'
import { bubblePop } from '../../../variants/variants'

const Chat = ({
    npcPosition,
    text
}) => {


    console.log("CHAT RENDER")

    return (
        <>
            <Html 
                wrapperClass="bubbleWrapper"
                position={[npcPosition.x, npcPosition.y + 2, npcPosition.z]}
            >
                <motion.div
                    className="bubbleMotionWrapper"
                    key="box"
                    variants={bubblePop}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <div className="bubble" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(text)}} />
                </motion.div>
            </Html>
        </>
    )
}

export default Chat