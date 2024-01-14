import { useGLTF } from "@react-three/drei"
import { RigidBody } from '@react-three/rapier'
import Player from "../player/Player"
import Sensei from "../npcs/Sensei"

const Map = (props) => {

    const { nodes, materials } = useGLTF("maps/tatami-room-test-map.glb")

    return (
        <>
            {/* THIS WILL GO TO ITS OWN MAP */}
            <RigidBody type="fixed" position-y={-1} includeInvisible>
                <directionalLight
                    castShadow
                    position={[-6, 8, 2]}
                    intensity={1}
                    shadow-normalBias={0.09}
                />
                <ambientLight intensity={1} />
                <group {...props} dispose={null}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.BAse.geometry}
                        material={materials.Wood}
                        position={[-0.952, -0.152, 0.167]}
                        rotation={[0, -0.783, 0]}
                        scale={[1.729, 0.65, 2.274]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Wall.geometry}
                        material={materials["Material.003"]}
                        position={[-1.825, 1.009, -1.337]}
                        rotation={[0, 0.788, 0]}
                        scale={[0.859, 1.103, 0.047]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Column.geometry}
                        material={materials.Wood}
                        position={[-3.062, 1.079, -0.081]}
                        rotation={[0, -0.783, 0]}
                        scale={1.103}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Column002.geometry}
                        material={materials.Wood}
                        position={[-0.565, 1.079, -2.588]}
                        rotation={[0, -0.783, 0]}
                        scale={1.103}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Column003.geometry}
                        material={materials.Wood}
                        position={[1.871, 1.079, -0.163]}
                        rotation={[0, -0.783, 0]}
                        scale={1.103}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Column004.geometry}
                        material={materials.Wood}
                        position={[0.638, 2.399, -1.408]}
                        rotation={[0, -0.783, -Math.PI / 2]}
                        scale={1.103}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Column005.geometry}
                        material={materials.Wood}
                        position={[-1.814, 2.399, -1.347]}
                        rotation={[0, 0.788, -Math.PI / 2]}
                        scale={1.103}
                    />
                    <group
                        position={[0.113, 0.973, -1.912]}
                        rotation={[0, -0.783, 0]}
                        scale={[0.856, 1.099, 0.047]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube001.geometry}
                            material={materials.Wood}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube001_1.geometry}
                            material={materials.Paper}
                        />
                    </group>
                    <group
                        position={[1.317, 0.973, -0.713]}
                        rotation={[0, -0.783, 0]}
                        scale={[0.856, 1.099, 0.047]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006.geometry}
                            material={materials.Wood}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube006_1.geometry}
                            material={materials.Paper}
                        />
                    </group>
                </group>
            </RigidBody>

            <Player />
            <Sensei />
        </>
    )
}

useGLTF.preload("maps/tatami-room-test-map.glb")

export default Map