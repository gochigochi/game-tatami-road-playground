import { useState, useRef } from 'react'
import { useGameProgress } from '../../../store/gameProgress'
import useInteractionInput from '../../../hooks/useInteractionInput'
import { useGameState } from '../../../store/gameState'
import PlayerInputBubble from './PlayerInputBubble'
import NpcBubble from './NpcBubble'
import PlayerDraggablesBubble from './PlayerDraggablesBubble'

const ChatHandler = ({ data }) => {

    console.log("DATA...", data)

    const gameCheckpoint = useGameProgress(state => state.gameCheckpoint)
    const updateGameState = useGameState(state => state.updateGameState)
    const updateGameCheckpoint = useGameProgress(state => state.updateGameCheckpoint)

    const { checkpointScripts } = data.scripts.findLast(scripts => scripts.checkpoint <= gameCheckpoint)
    const firstScript = checkpointScripts.find(scripts => scripts.node === 0)
    const [currentCheckpointScripts, setCurrentCheckpointScripts] = useState(checkpointScripts)
    const [currentScript, setCurrentScript] = useState(firstScript)

    const [hasInput, setHasInput] = useState(false)
    const inputRef = useRef("")

    const [hasDraggables, setHasDraggables] = useState(false)
    const draggablesInputRef = useRef("")

    const getNextScript = (nextNode) => {

        const nextScript = checkpointScripts.find(scripts => scripts.node === nextNode)
        setCurrentScript(null) // REMOVE SCRIPTS AND SET THEM AGAIN AS TO CLOSE OPEN SPEECH BUBBLE
        setTimeout(() => setCurrentScript(nextScript), 200)
    }

    const handleInputSubmit = (e) => {

        e.preventDefault()

        //TRIM INPUT, REMOVE POINTS AND COMMAS

        if (inputRef.current.value === currentScript.correctAnsw) {

            getNextScript(currentScript.nextNode)

        } else {

            getNextScript("error")
        }

        setHasInput(false)
    }

    const handleDraggablesSubmit = (answ) => {

        console.log("handle drag....", answ)
    }

    const end = () => {
        setCurrentCheckpointScripts(null)
        setCurrentScript(null)
        updateGameState("PLAY")
    }

    useInteractionInput((e) => {

        if (e.repeat) return

        if (e.code === "Enter" && !hasInput && !hasDraggables) {

            console.log("checkpointScripts....", currentCheckpointScripts)
            console.log("currentScript....", currentScript)

            if (currentScript?.requiresInput) {
                return setHasInput(true)
            }

            if (currentScript?.requiresDrag) {
                return setHasDraggables(true)
            }

            if (currentScript?.nextNode) {
                return getNextScript(currentScript.nextNode)
            }

            if (currentScript?.isEnd || currentScript?.node === "error") end()

        }
    }, [currentScript, currentCheckpointScripts, hasInput])

    return (
        <>
            {
                currentScript ?
                    <NpcBubble
                        npcPosition={data.position}
                        text={currentScript.text}
                        flipped={data.playerPosition.x > data.position.x}
                    /> : null
            }
            {
                hasInput ?
                    <PlayerInputBubble
                        playerPosition={data.playerPosition}
                        handleInputSubmit={handleInputSubmit}
                        ref={inputRef}
                        flipped={data.playerPosition.x < data.position.x}
                    /> : null
            }
            {
                hasDraggables ?
                    <PlayerDraggablesBubble
                        playerPosition={data.playerPosition}
                        handleDraggablesSubmit={handleDraggablesSubmit}
                        flipped={data.playerPosition.x < data.position.x}
                        draggables={currentScript.draggables}
                        ref={draggablesInputRef}
                    /> : null
            }
        </>
    )
}

export default ChatHandler