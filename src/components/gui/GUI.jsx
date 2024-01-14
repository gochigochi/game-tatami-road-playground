import NpcNameTag from "../tags/npc_name_tag/NpcNameTag"
import { useInterNpc } from "../../store/interNpc"

const GUI = () => {

  const interNpcData = useInterNpc(state => state.interNpcData)

  return (
    <>
      {
        Object.keys(interNpcData).length !== 0 ?
          <NpcNameTag position={interNpcData.position} /> : null
      }
    </>
  )
}

export default GUI