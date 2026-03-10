import { unit } from "../../configs/globals";

const Building = ({
  size = 1,
  position = [0, 0, 0],
}: {
  size?: number;
  position?: [number, number, number];
}) => {
  return (
    <>
      <mesh position={[position[0], position[1], position[2]]}>
        <boxGeometry args={[unit * size, 0.1, unit * size]} />
        <meshPhongMaterial color="blue" />
      </mesh>

      <mesh position={[position[0], position[1] + 1, position[2]]}>
        <boxGeometry args={[(unit * size) / 2, 2, (unit * size) / 2]} />
        <meshPhongMaterial color="red" />
      </mesh>
    </>
  );
};

export default Building;
