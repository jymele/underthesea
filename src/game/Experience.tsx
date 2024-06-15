import { Canvas } from "@react-three/fiber";
import Lighting from "./utils/Lighting";
import Floor from "./components/Floor";
import { Physics } from "@react-three/rapier";
import Player from "./components/Player";
import FishBank from "./components/FishBank";
import CoralModel from "./components/models/CoralModel";
import { Vector3 } from "three";

import { useControls } from "leva";
import FishDance from "./components/FishDance";

interface Props {}

function Experience(props: Props) {
  const {} = props;

  const coralPositions: Vector3[] = [
    new Vector3(0, 0, 0),
    new Vector3(4, -0.2, -5),
    new Vector3(-8, -0.6, 5),
  ];

  // const { coord } = useControls("Corals position", {
  //   coord: { x: 0, y: 0, z: 0 },
  // });

  return (
    <Canvas
      shadows
      className="scene"
      camera={{
        fov: 75,
        position: [-1, 12, 15],
      }}
    >
      <Lighting />
      <Physics debug gravity={[0, -1.2, 0]}>
        <Player />
        <Floor />
        <FishBank />
        <FishDance xPos={3} zPos={4} />

        {/* Adding corals */}
        {coralPositions.map((position, index) => (
          <CoralModel key={index} position={position.toArray()} />
        ))}

        {/* <CoralModel position={[coord.x, coord.y, coord.z]} /> */}
      </Physics>
    </Canvas>
  );
}

export default Experience;
