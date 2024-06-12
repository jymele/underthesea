import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

interface Props {}

type GLTFResult = GLTF & {
  nodes: {
    Floor: THREE.Mesh;
  };
  materials: {
    Floor: THREE.MeshStandardMaterial;
  };
};

export default function Floor(props: Props) {
  const {} = props;
  const { nodes, materials } = useGLTF("/models/floor.glb") as GLTFResult;

  return (
    <>
      <RigidBody colliders="trimesh" type="fixed" position-y={-0.075}>
        <group {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Floor.geometry}
            material={materials.Floor}
          />
        </group>
      </RigidBody>
    </>
  );
}

useGLTF.preload("/floor.glb");
