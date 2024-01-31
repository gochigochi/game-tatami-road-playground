import { useEffect } from "react"

const useInteractionInput = (listener, deps) => {

    useEffect(() => {

        document.addEventListener("keydown", listener)

        return () => {
            console.log("HERE")
            document.removeEventListener("keydown", listener)
        }

    }, deps)
}

export default useInteractionInput