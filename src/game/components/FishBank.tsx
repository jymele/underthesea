import { Vector3 } from "@react-three/fiber";
import { FishModel } from "./models/FishModel";

interface Props {}

function FishBank(props: Props) {
  const {} = props;

  const fishPositions: Vector3[] = [
    [0, 0, 0],
    [0.25, 0.2, 0],
    [-0.1, 0, 0.3],
    [0.3, -0.2, 0.1],
    [-0.1, 0.1, -0.2],
  ];

  return (
    <group position-y={3}>
      {fishPositions.map((position: Vector3, index: number) => (
        <FishModel key={index} position={position} />
      ))}
    </group>
  );
}

export default FishBank;
