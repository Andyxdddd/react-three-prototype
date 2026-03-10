import { Grid, KeyboardControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { controls } from "./configs/controls";
import Player from "./components/Player";
import { Activity } from "react";
import DevUi from "./components/ui/DevUi";
import World from "./components/World";

const IS_DEV = true;

const PLAYER_START_POSITION = [7, 50];

const App = () => {
  return (
    <div className="bg-gray-950 h-screen relative">
      <DevUi />

      <KeyboardControls map={controls}>
        <Canvas
          camera={{
            position: [PLAYER_START_POSITION[0], 2, PLAYER_START_POSITION[1]],
            rotation: [-0.2, 0, 0],
          }}
        >
          <Activity mode={IS_DEV ? "visible" : "hidden"}>
            <>
              <Stats />
              <Grid
                position={[0, 0.01, 0]}
                infiniteGrid={true}
                followCamera={true}
              />
            </>
          </Activity>
          <World />
          <Player />
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

export default App;
