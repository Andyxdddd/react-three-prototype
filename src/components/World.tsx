import { Environment, Sky } from "@react-three/drei";
import Level from "./Level";

const World = () => {
  return (
    <>
      <Sky />
      <Environment preset="dawn" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <Level />
    </>
  );
};

export default World;
