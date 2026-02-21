import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <>
      <div className="bg-gray-950 h-screen">
        <Canvas camera={{ position: [5, 5, 10] }}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshPhongMaterial />
          </mesh>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 0]} color="white" />
        </Canvas>
      </div>
    </>
  );
};

export default App;
