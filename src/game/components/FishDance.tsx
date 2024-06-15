interface Props {}
import CirclingFish from "./programmedModels/CirclingFish";

interface Props {
  yPos?: number;
  xPos?: number;
  zPos?: number;
}

function FishDance(props: Props) {
  const { yPos, xPos, zPos } = props;

  const fishAttributes = [
    [1, 0.9],
    [0.8, 0.8],
    [1.2, 1],
    [1, 1.2],
    [0.9, 1.1],
    [1.1, 1.3],
  ];

  return (
    <>
      <group position={[xPos ? xPos : 0, yPos ? yPos : 1, zPos ? zPos : 0]}>
        {fishAttributes.map((attr, index) => (
          <CirclingFish
            key={index}
            radius={attr[0]}
            speed={attr[1]}
            yPos={1.5 - Math.random()}
          />
        ))}
      </group>
    </>
  );
}

export default FishDance;
