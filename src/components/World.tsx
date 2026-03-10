import { Environment, Sky } from "@react-three/drei";
import Level from "./Level";
import { levels } from "../configs/levels";
import type { LevelType } from "../types";
import Player from "./Player";

const World = () => {
  const level: LevelType = levels[0];

  return (
    <>
      <Sky />
      <Environment preset="dawn" />
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 10, 5]} intensity={2} />
      <Level level={level} />
      <Player position={level.playerStartPosition} />
    </>
  );
};

export default World;
