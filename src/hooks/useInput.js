import { useEffect, useRef } from 'react'

export const useInput = () => {
    const input = useRef({
        forward: false,
        backward: false,
        left: false,
        right: false,
        cancel: false,
        enter: false,
        openMenu: false,
        openKanjiBook: false,
        openGrammarBook: false,
        openInventary: false,
    })

    const keys = {
        ArrowUp: "forward",
        ArrowDown: "backward",
        ArrowLeft: "left",
        ArrowRight: "right",
        KeyM: "openMenu",
        Enter: "enter",
    }

    const findKey = (key) => keys[key]

    useEffect(() => {

        const handleKeyDown = (e) => {

            // Prevent setting the input to true while the key is down, but only the first time
            if (e.repeat) return

            if (
                e.code === "ArrowUp" ||
                e.code === "ArrowDown" ||
                e.code === "ArrowLeft" ||
                e.code === "ArrowRight" ||
                e.code === "KeyM" ||
                e.code === "Enter"
            ) {

                input.current = {
                    ...input.current,
                    [findKey(e.code)]: true,
                }
            } 
        }

        const handleKeyUp = (e) => {

            if (
                e.code === "ArrowUp" ||
                e.code === "ArrowDown" ||
                e.code === "ArrowLeft" ||
                e.code === "ArrowRight" ||
                e.code === "KeyM" ||
                e.code === "Enter"
            ) {

                input.current = {
                    ...input.current,
                    [findKey(e.code)]: false,
                }
            } 
        }

        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("keyup", handleKeyUp)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("keyup", handleKeyUp)
        }

    }, [])

    return { input }
}