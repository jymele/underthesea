import { Canvas } from "@react-three/fiber";

import Lighting from "./utils/Lighting";
import Controls from "./utils/Controls";
import Floor from "./components/Floor";
import { Physics } from "@react-three/rapier";

interface Props {}

function Experience(props: Props) {
  const {} = props;

  return (
    <Canvas
      shadows
      className="scene"
      camera={{
        fov: 75,
        position: [0, 2, 5],
      }}
    >
      <Controls />
      <Lighting />
      <Physics debug>
        <mesh castShadow position-y={0.5}>
          <boxGeometry args={[1, 1, 1]} />
          <meshLambertMaterial color="hotpink" reflectivity={1} />
        </mesh>
        <Floor />
      </Physics>
    </Canvas>
  );
}

export default Experience;
