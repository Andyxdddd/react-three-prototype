import { Environment, Sky } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const World = () => {
  const [building, car] = useLoader(GLTFLoader, [
    "/models/cyberpunk_background_appartment_building.glb",
    "/models/old_car.glb",
  ]);

  return (
    <>
      <Sky />
      <Environment preset="city" />
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 10, 5]} intensity={2} />

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[12, 1, 12]} />
        <meshPhongMaterial color="lightgreen" />
      </mesh>

      <mesh position={[0, 0, 12]}>
        <boxGeometry args={[12, 1, 12]} />
        <meshPhongMaterial color="lightgreen" />
      </mesh>

      <mesh position={[9, 0, 0]}>
        <boxGeometry args={[6, 1, 12]} />
        <meshPhongMaterial color="gray" />
      </mesh>

      <mesh position={[9, 0, 12]}>
        <boxGeometry args={[6, 1, 12]} />
        <meshPhongMaterial color="gray" />
      </mesh>

      <mesh position={[18, 0, 0]}>
        <boxGeometry args={[12, 1, 12]} />
        <meshPhongMaterial color="lightgreen" />
      </mesh>

      <mesh position={[18, 0, 12]}>
        <boxGeometry args={[12, 1, 12]} />
        <meshPhongMaterial color="lightgreen" />
      </mesh>

      <mesh position={[6, 1, -1]}>
        <boxGeometry args={[0.1, 3, 0.1]} />
        <meshPhongMaterial color="orange" />
      </mesh>

      <primitive
        object={building.scene}
        position={[13.5, 0.5, 22]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1}
      />

      <primitive
        object={car.scene}
        position={[7.5, 0.48, 8]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1}
      />
    </>
  );
};

export default World;
