import { useEffect } from "react"

const useInteractionInput = (handler, deps) => {

    useEffect(() => {

        document.addEventListener("keydown", handler)

        return () => document.removeEventListener("keydown", handler)

    }, deps)
}

export default useInteractionInput