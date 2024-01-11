import { forwardRef, memo } from 'react'

const Model = forwardRef((props, ref) => {

    return (
        <group ref={ref} dispose={null}>
            <group name="Scene">
                <group name="metarig">
                    <skinnedMesh
                        castShadow
                        receiveShadow
                        name="Body"
                        geometry={props.nodes.Body.geometry}
                        material={props.materials.Skin}
                        skeleton={props.nodes.Body.skeleton}
                    />
                    <skinnedMesh
                        castShadow
                        receiveShadow
                        name="HairAlt"
                        geometry={props.nodes.HairAlt.geometry}
                        material={props.materials.Hair}
                        skeleton={props.nodes.HairAlt.skeleton}
                    />
                    <skinnedMesh
                        castShadow
                        receiveShadow
                        name="Pants"
                        geometry={props.nodes.Pants.geometry}
                        material={props.materials.Material}
                        skeleton={props.nodes.Pants.skeleton}
                    />
                    <skinnedMesh
                        castShadow
                        receiveShadow
                        name="Roundcube"
                        geometry={props.nodes.Roundcube.geometry}
                        material={props.materials.Hair}
                        skeleton={props.nodes.Roundcube.skeleton}
                    />
                    <skinnedMesh
                        castShadow
                        receiveShadow
                        name="Shirt"
                        geometry={props.nodes.Shirt.geometry}
                        material={props.materials["Material.001"]}
                        skeleton={props.nodes.Shirt.skeleton}
                    />
                    <primitive object={props.nodes.spine} />
                </group>
            </group>
        </group>
    )
})

export default memo(Model)