import { memo } from 'react'
import { useGLTF } from "@react-three/drei"
import { CapsuleCollider, CuboidCollider, RigidBody } from '@react-three/rapier'
import Portal from '../../portal/Portal'

const TatamiRoom = (props) => {

    const { nodes, materials } = useGLTF("maps/tatami-map.glb")

    return (
        <RigidBody
            type="fixed"
            position-y={-1}
            rotation={[0, -Math.PI / 4, 0]}
            includeInvisible
        >
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
                    position={[-0.002, -0.152, 0.216]}
                    scale={[1.729, 0.65, 2.274]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Wall.geometry}
                    material={materials["Material.003"]}
                    position={[-1.682, 1.009, -0.234]}
                    rotation={[0, 1.57, 0]}
                    scale={[0.859, 1.103, 0.047]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Column.geometry}
                    material={materials.Wood}
                    position={[-1.673, 1.079, 1.529]}
                    scale={1.103}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Column002.geometry}
                    material={materials.Wood}
                    position={[-1.671, 1.079, -2.009]}
                    scale={1.103}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Column003.geometry}
                    material={materials.Wood}
                    position={[1.766, 1.079, -2.008]}
                    scale={1.103}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Column004.geometry}
                    material={materials.Wood}
                    position={[0.014, 2.399, -2.021]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={1.103}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Column005.geometry}
                    material={materials.Wood}
                    position={[-1.681, 2.399, -0.249]}
                    rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                    scale={1.103}
                />
                <group position={[-0.714, 0.973, -2.009]} scale={[0.856, 1.099, 0.047]}>
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
                <group position={[0.985, 0.973, -2.008]} scale={[0.856, 1.099, 0.047]}>
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
            <Portal
                to={props.to}
                tag={"いえ　を　でる"}
                args={[.8, 1, .2]}
                position={[.9, .9, -1.9]}
            />
        </RigidBody>
    )
}

useGLTF.preload("maps/tatami-map.glb")

export default memo(TatamiRoom)