import { Canvas } from "@react-three/fiber";

import Lighting from "./utils/Lighting";
import Floor from "./components/Floor";
import { Physics } from "@react-three/rapier";
import Player from "./components/Player";
import { OrbitControls } from "@react-three/drei";

interface Props {}

function Experience(props: Props) {
  const {} = props;

  return (
    <Canvas
      shadows
      className="scene"
      camera={{
        fov: 75,
        position: [-1, 12, 15],
      }}
    >
      <OrbitControls />
      <Lighting />
      <Physics debug gravity={[0, -1.2, 0]}>
        <Player />
        <Floor />
      </Physics>
    </Canvas>
  );
}

export default Experience;
