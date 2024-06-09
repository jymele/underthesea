import { RefObject, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Ecctrl, { useGame } from "ecctrl";

interface Props {}

function Player(props: Props) {
  const {} = props;

  useFrame(() => {});

  return (
    <>
      {/* <RigidBody type="kinematicVelocity" position-y={5.5}> */}
      <Ecctrl>
        <group scale={0.5}>
          <mesh castShadow>
            <boxGeometry args={[0.5, 0.5, 1]} />
            <meshLambertMaterial color="hotpink" reflectivity={1} />
          </mesh>
          <mesh position-x={0.5} rotation-x={Math.PI * 0.5}>
            <capsuleGeometry args={[0.25, 0.25, 2, 16]} />
            <meshLambertMaterial color="hotpink" reflectivity={1} />
          </mesh>
          <mesh position-x={-0.5} rotation-x={Math.PI * 0.5}>
            <capsuleGeometry args={[0.25, 0.25, 2, 16]} />
            <meshLambertMaterial color="hotpink" reflectivity={1} />
          </mesh>
        </group>
      </Ecctrl>
      {/* </RigidBody> */}
    </>
  );
}

export default Player;
