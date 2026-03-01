import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const City = () => {
  const [building, car] = useLoader(GLTFLoader, [
    "/models/cyberpunk_background_appartment_building.glb",
    "/models/old_car.glb",
  ]);

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[64, 0, 64]} />
        <meshPhongMaterial color="lightgreen" />
      </mesh>

      <mesh position={[9, 0, 0]}>
        <boxGeometry args={[6, 0.1, 64]} />
        <meshPhongMaterial color="#242424" />
      </mesh>

      <mesh position={[5.8, 1, -1]}>
        <boxGeometry args={[0.1, 5, 0.1]} />
        <meshPhongMaterial color="gray" />
      </mesh>

      <primitive
        object={building.scene}
        position={[13.5, 0, 22]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1}
      />

      <primitive
        object={car.scene}
        position={[7.5, 0.1, 8]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1}
      />
    </>
  );
};

export default City;
