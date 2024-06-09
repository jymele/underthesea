/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    body: THREE.Mesh;
    tailfin: THREE.Mesh;
  };
  materials: {};
};

export function FishModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/models/fish.glb") as GLTFResult;
  const tailfinRef = useRef<THREE.Mesh>(null);

  const tailRotationSpeed: number = 6;

  useFrame(({ clock }) => {
    // Rotate the fish tailfin
    if (tailfinRef.current) {
      tailfinRef.current.rotation.y =
        Math.sin(clock.getElapsedTime() * tailRotationSpeed) * 0.5;
    }
  });

  const fishMaterial = new THREE.MeshToonMaterial({
    color: 0xfacc15,
    // emissive: 0xfacc15,
    // emissiveIntensity: 0.2,
  });

  return (
    <group {...props} scale={0.1} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.body.geometry}
        // material={nodes.body.material}
        material={fishMaterial}
      />
      <mesh
        ref={tailfinRef}
        castShadow
        receiveShadow
        geometry={nodes.tailfin.geometry}
        // material={nodes.tailfin.material}
        material={fishMaterial}
        position={[0, 0, -1.2]}
      />
    </group>
  );
}

useGLTF.preload("/models/fish.glb");
