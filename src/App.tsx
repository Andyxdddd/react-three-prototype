import { KeyboardControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Player from "./components/Player";

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
          <World />f
          <Player />
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

const World = () => {
  return (
    <>
      <Sky />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 0]} />

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

      <mesh position={[15, 1, -4]}>
        <boxGeometry args={[4, 4, 4]} />
        <meshPhongMaterial color="red" />
      </mesh>

      <mesh position={[7.5, 1, 8]}>
        <boxGeometry args={[2, 1.5, 4]} />
        <meshPhongMaterial color="blue" />
      </mesh>
    </>
  );
};

export default App;
