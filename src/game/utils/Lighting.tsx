import { SoftShadows } from "@react-three/drei";

interface Props {}

const waterHexLight = "#19699e";
// const waterHexLight = "#4dabf5";

function Lighting(props: Props) {
  const {} = props;

  return (
    <>
      <directionalLight castShadow position={[2.5, 8, 5]} intensity={1.5} />
      <ambientLight intensity={0.7} color={waterHexLight} />
      {/* <fog attach="fog" args={[waterHexLight, 0, 25]} /> */}
      <SoftShadows />
    </>
  );
}

export default Lighting;
