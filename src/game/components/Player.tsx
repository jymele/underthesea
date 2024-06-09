import { useFrame } from "@react-three/fiber";
import Ecctrl, { EcctrlAnimation, useGame } from "ecctrl";
import PlayerModel from "./models/PlayerModel";

interface Props {}

function Player(props: Props) {
  const {} = props;

  useFrame(() => {});

  const animationSet = {
    idle: "Walk",
    walk: "Walk",
    run: "Walk",
    jump: "Walk",
    jumpIdle: "Walk",
    jumpLand: "Walk",
    fall: "Walk", // This is for falling from high sky
    // Currently support four additional animations
    // action1: "Wave",
    // action2: "Dance",
    // action3: "Cheer",
    // action4: "Attack(1h)",
  };

  return (
    <>
      <Ecctrl animated>
        <EcctrlAnimation
          characterURL="/models/player.glb"
          animationSet={animationSet}
        >
          <PlayerModel scale={0.2} />
        </EcctrlAnimation>
        {/* <group scale={0.5}>
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
        </group> */}
      </Ecctrl>
    </>
  );
}

export default Player;
