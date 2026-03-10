import { Grid, KeyboardControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { controls } from "./configs/controls";
import { Activity } from "react";
import DevUi from "./components/ui/DevUi";
import World from "./components/World";

const IS_DEV = true;

const App = () => {
  return (
    <div className="bg-gray-950 h-screen relative">
      <DevUi />

      <KeyboardControls map={controls}>
        <Canvas>
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
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

export default App;
