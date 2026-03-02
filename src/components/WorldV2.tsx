import { Environment, Sky } from "@react-three/drei";
import Level from "./Level";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import * as SkeletonUtils from "three/examples/jsm/utils/SkeletonUtils.js";

const World = () => {
  // const [house1, house2, apartment1] = useLoader(GLTFLoader, [
  //   "/models/new/low_poly_house_1.glb",
  //   "/models/new/low_poly_house_2.glb",
  //   "/models/new/low_poly_apartment_building_1.glb",
  // ]);

  // const level = [
  //   [0, 0, 0, 0, 0],
  //   [0, 1, 0, 1, 0],
  //   [0, 0, 0, 0, 0],
  //   [0, 1, 0, 1, 0],
  //   [0, 0, 0, 0, 0],
  // ];

  // const randomBuilding = () => {
  //   return apartment1;
  // };

  return (
    <>
      <Sky />
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <Environment preset="city" />
      <Level />

      {/* {level.map((row, z) =>
        row.map((cell, x) => {
          if (cell === 1) {
            const baseModel = randomBuilding();

            const clonedScene = SkeletonUtils.clone(baseModel.scene);

            return (
              <primitive
                key={`${x}-${z}`}
                object={clonedScene}
                position={[x * 10, 0, z * 10]}
                scale={2.5}
              />
            );
          }
          return null;
        }),
      )} */}
    </>
  );
};

export default World;
