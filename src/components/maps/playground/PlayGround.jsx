import { memo } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const Playground = (props) => {

    const { nodes, materials } = useGLTF('./maps/playground.glb')
    
    return (
        <RigidBody type="fixed" position-y={-1} includeInvisible>
            {/* ADD LIGHT TO EACH LEVEL INDIVIDUALLY FOR GRANULAR CONTROL */}
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
                    position={[0.032, -0.152, 0.521]}
                    rotation={[0, 0.002, 0]}
                    scale={[1.729, 0.65, 2.274]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Column002.geometry}
                    material={materials.Wood}
                    position={[-1.643, 1.079, -6.262]}
                    rotation={[0, 0.002, 0]}
                    scale={1.103}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Column003.geometry}
                    material={materials.Wood}
                    position={[1.794, 1.079, -6.269]}
                    rotation={[0, 0.002, 0]}
                    scale={1.103}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Column004.geometry}
                    material={materials.Wood}
                    position={[0.043, 2.399, -6.278]}
                    rotation={[0, 0.002, -Math.PI / 2]}
                    scale={1.103}
                />
                <group
                    position={[-0.685, 0.973, -6.264]}
                    rotation={[0, 0.002, 0]}
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
                    position={[1.014, 0.973, -6.267]}
                    rotation={[0, 0.002, 0]}
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
    )
}

useGLTF.preload("maps/playground.glb")

export default memo(Playground)