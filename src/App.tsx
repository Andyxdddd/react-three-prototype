import { Grid, KeyboardControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { controls } from "./configs/controls";
import Player from "./components/Player";
import World from "./components/World";
import { Activity } from "react";
import DevUi from "./components/ui/DevUi";

const IS_DEV = false;

const gridConfig = {
  infiniteGrid: true,
  followCamera: true,
};

const App = () => {
  return (
    <div className="bg-gray-950 h-screen relative">
      <DevUi />

      <KeyboardControls map={controls}>
        <Canvas camera={{ position: [0, 2, 0], rotation: [-0.2, 0, 0] }}>
          <Activity mode={IS_DEV ? "visible" : "hidden"}>
            <>
              <Grid position={[0, 0.01, 0]} {...gridConfig} />
              <Stats />
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
