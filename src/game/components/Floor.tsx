import { RigidBody } from "@react-three/rapier";
import React from "react";

interface Props {}

function Floor(props: Props) {
  const {} = props;

  return (
    <>
      <RigidBody colliders="trimesh" type="fixed" position-y={-0.075}>
        <mesh
          receiveShadow
          // position-y={-0.075}
        >
          <cylinderGeometry args={[10, 10, 0.15, 8]} />
          <meshLambertMaterial color="white" reflectivity={1} />
        </mesh>
      </RigidBody>
    </>
  );
}

export default Floor;
