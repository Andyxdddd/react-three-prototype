import { Environment, Sky } from "@react-three/drei";
import City from "./City";

const World = () => {
  return (
    <>
      <Sky />
      <Environment preset="city" />
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <City />
    </>
  );
};

export default World;
