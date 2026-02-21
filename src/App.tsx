import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <>
      <div className="bg-gray-950 h-screen">
        <Canvas camera={{ position: [2, 2, 10] }}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshPhongMaterial />
          </mesh>
          <ambientLight intensity={0.1} />
          <directionalLight position={[0, 0, 5]} color="red" />
        </Canvas>
      </div>
    </>
  );
};

export default App;
