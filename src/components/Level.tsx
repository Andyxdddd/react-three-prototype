import { Box } from "@react-three/drei";

const Road = ({ position }: { position: [number, number] }) => {
  const roadWidth = 5;

  return (
    <Box
      args={[roadWidth * 2, 0.1, roadWidth * 2]}
      position={[position[0], 0, position[1]]}
      material-color="darkgray"
    />
  );
};

const Grass = ({ position }: { position: [number, number] }) => {
  const roadWidth = 5;

  return (
    <Box
      args={[roadWidth * 2, 0.1, roadWidth * 2]}
      position={[position[0], 0, position[1]]}
      material-color="darkgreen"
    />
  );
};

const Building = ({
  position,
  type,
}: {
  position: [number, number];
  type: string;
}) => {
  const buildingHeight = 10;
  const buildingWidth = 10;

  return (
    <Box
      args={[buildingWidth, buildingHeight, buildingWidth]}
      position={[position[0], buildingHeight / 2, position[1]]}
      material-color={type === "office" ? "blue" : "red"}
    />
  );
};

const levelData = [
  [3, 3, 3, 3, 3, 3, 3],
  [3, 0, 2, 0, 0, 0, 3],
  [3, 0, 2, 0, 1, 0, 3],
  [3, 0, 0, 0, 0, 0, 3],
  [3, 2, 1, 0, 2, 2, 3],
  [3, 0, 0, 0, 0, 0, 3],
  [3, 3, 3, 3, 3, 3, 3],
];

const Level = () => {
  return (
    <>
      {levelData.map((row, z) =>
        row.map((cell, x) => {
          const position: [number, number] = [x * 10, z * 10];

          switch (cell) {
            case 0:
              return <Road key={`${x}-${z}`} position={position} />;
            case 1:
              return (
                <Building key={`${x}-${z}`} position={position} type="office" />
              );
            case 2:
              return (
                <Building
                  key={`${x}-${z}`}
                  position={position}
                  type="residential"
                />
              );
            default:
              return <Grass key={`${x}-${z}`} position={position} />;
          }
        }),
      )}
    </>
  );
};

export default Level;
