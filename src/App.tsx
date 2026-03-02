import { Grid, KeyboardControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { controls } from "./configs/controls";
import Player from "./components/Player";
import { Activity } from "react";
// import DevUi from "./components/ui/DevUi";
import WorldV2 from "./components/WorldV2";

const IS_DEV = true;

const App = () => {
  return (
    <div className="bg-gray-950 h-screen relative">
      {/* <DevUi /> */}

      <KeyboardControls map={controls}>
        <Canvas camera={{ position: [0, 2, 0], rotation: [-0.2, 0, 0] }}>
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
          <WorldV2 />
          <Player />
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

export default App;
