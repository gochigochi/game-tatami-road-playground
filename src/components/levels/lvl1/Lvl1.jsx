import TatamiRoom from '../../maps/interiors/TatamiRoom'
import Sensei from '../../npcs/Sensei'
import Player from '../../player/Player'
import Lvl2 from '../lvl2/Lvl2'
import { sensei_data } from './data/sensei_data'

const Lvl1 = () => {
    return (
        <>
            <TatamiRoom to={<Lvl2 />} />
            <Sensei data={sensei_data} />
            <Player />
        </>
    )
}

export default Lvl1