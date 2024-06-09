import { FishModel } from "./models/FishModel";

interface Props {}

function FishBank(props: Props) {
  const {} = props;

  return (
    <group position-y={3}>
      <FishModel />
    </group>
  );
}

export default FishBank;
