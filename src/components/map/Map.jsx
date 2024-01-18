
import { useEffect } from "react"
import { useGameMap } from "../../store/gameMap"
import Lvl1 from "../levels/lvl1/Lvl1"
// import Lvl2 from "../levels/lvl2/Lvl2"

const Map = () => {

    const gameMap = useGameMap(state => state.gameMap)
    const updateGameMap = useGameMap(state => state.updateGameMap)

    useEffect(() => {
        //START GAME WITH SPLASH SCREEN UP TO MENU
        //OR SET THE MAP ACCORDING TO SAVED PROGRESS
        updateGameMap(<Lvl1 />)
    }, [])

    if(gameMap) {
        return gameMap
    }

    return (
        <>{console.log("loading...")}</>
    )
}

export default Map