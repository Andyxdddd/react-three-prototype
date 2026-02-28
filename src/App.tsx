import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Player from "./components/Player";
import World from "./components/World";

const App = () => {
  return (
    <div className="bg-gray-950 h-screen">
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "z", "Z"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "q", "Q"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
        ]}
      >
        <Canvas camera={{ position: [0, 2, 0], rotation: [-0.2, 0, 0] }}>
          <World />
          <Player />
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

export default App;
