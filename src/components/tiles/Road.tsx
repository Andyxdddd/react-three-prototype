import { unit } from "../../configs/globals";

const Road = ({
  size = 1,
  position = [0, 0, 0],
}: {
  size?: number;
  position?: [number, number, number];
}) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={[unit * size, 0.1, unit * size]} />
        <meshPhongMaterial color="darkgray" />
      </mesh>
    </>
  );
};

export default Road;
