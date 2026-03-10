import { Box } from "@react-three/drei";
import type { LevelType } from "../types";

const Level = ({ level }: { level: LevelType }) => {
  return (
    <>
      {level.layout.map((row, z) =>
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

      <mesh position={[6, 2, 50]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial color="green" />
      </mesh>

      <mesh position={[55, 2, 6]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial color="red" />
      </mesh>
    </>
  );
};

export default Level;

// ------------------------------------------------------------

const Road = ({ position }: { position: [number, number] }) => {
  const roadWidth = 5;

  return (
    <Box
      args={[roadWidth * 2, 0.1, roadWidth * 2]}
      position={[position[0], 0, position[1]]}
      material-color="#313438"
    />
  );
};

const Grass = ({ position }: { position: [number, number] }) => {
  const roadWidth = 5;

  return (
    <Box
      args={[roadWidth * 2, 0.5, roadWidth * 2]}
      position={[position[0], 0, position[1]]}
      material-color="#45664d"
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
      material-color={type === "office" ? "#697078" : "#797570"}
    />
  );
};
