import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Rock002: THREE.Mesh;
  };
  materials: {
    ["Rock.002"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/rock02.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rock002.geometry}
        material={materials["Rock.002"]}
        position={[8.558, 0, 5.351]}
      />
    </group>
  );
}

useGLTF.preload("/models/rock02.glb");
