import { useState, useEffect } from 'react'
import Chat from './Chat'
import { useGameProgress } from '../../../store/gameProgress'
import useInteractionInput from '../../../hooks/useInteractionInput'
import { useGameState } from '../../../store/gameState'

const ChatHandler = ({ data }) => {

    console.log(data)

    const [checkpointScripts, setCheckpointScripts] = useState(null)
    const [currentScript, setCurrentScript] = useState(null)
    const gameCheckpoint = useGameProgress(state => state.gameCheckpoint)
    const updateGameCheckpoint = useGameProgress(state => state.updateGameCheckpoint)
    const updateGameState = useGameState(state => state.updateGameState)

    const getNextScript = () => {

        const nextScript = checkpointScripts.find(scripts => scripts.node === currentScript.nextNode)

        setCurrentScript(null) // REMOVE SCRIPTS AND SET THEM AGAIN AS TO CLOSE OPEN SPEECH BUBBLE
        setTimeout(() => setCurrentScript(nextScript), 200)
    }

    const handleInput = () => {
        console.log("handle input")
    }

    const handleDrag = () => {
        console.log("handle drag")
    }

    const end = () => {
        setCheckpointScripts(null)
        setCurrentScript(null)
        updateGameState("PLAY")
    }

    useEffect(() => {

        const { checkpointScripts } = data.scripts.findLast(scripts => scripts.checkpoint <= gameCheckpoint)
        const firstScript = checkpointScripts.find(scripts => scripts.node === 0)
        setCheckpointScripts(checkpointScripts)
        setCurrentScript(firstScript)

    }, [])

    useInteractionInput((e) => {

        if (e.repeat) return

        if (e.code === "Enter") {

            console.log("checkpointScripts....", checkpointScripts)
            console.log("currentScript....", currentScript)            
            
            // if (currentScript?.requiresInput) handleInput()
    
            // if (currentScript?.requiresDrag) handleDrag()
    
            if (currentScript?.nextNode) getNextScript()
    
            if (currentScript?.isEnd) end()

        }
    }, [currentScript, checkpointScripts])

    return (
        <>
            {
                currentScript ?
                    <Chat
                        npcPosition={data.position}
                        text={currentScript.text}
                    /> : null
            }
        </>
    )
}

export default ChatHandler