import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  KeyboardControls,
  PointerLockControls,
  useKeyboardControls,
} from "@react-three/drei";

const App = () => {
  return (
    <div className="bg-gray-950 h-screen">
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "z", "Z"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "q", "Q"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas camera={{ position: [0, 2, 0], rotation: [-0.2, 0, 0] }}>
          <Game />
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

const Game = () => {
  const [_, get] = useKeyboardControls();
  const { camera } = useThree();

  useFrame(() => {
    const { forward, backward, left, right } = get();
    // console.log({ forward, backward, left, right, jump });

    const speed = 0.1;

    if (forward) {
      camera.position.z += speed;
    }
    if (backward) {
      camera.position.z -= speed;
    }
    if (left) {
      camera.position.x += speed;
    }
    if (right) {
      camera.position.x -= speed;
    }
  });

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[12, 1, 12]} />
        <meshPhongMaterial />
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 0]} color="white" />
      <PointerLockControls />
    </>
  );
};

export default App;
