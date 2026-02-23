import { useFrame } from "@react-three/fiber";
import { PointerLockControls, useKeyboardControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const Player = () => {
  const [_, get] = useKeyboardControls();
  const velocity = useRef(new THREE.Vector3());
  const direction = new THREE.Vector3();

  const SPEED = 5;

  useFrame((state, delta) => {
    const { forward, backward, left, right } = get();

    direction.set(0, 0, 0);

    if (forward) direction.z -= 1;
    if (backward) direction.z += 1;
    if (left) direction.x -= 1;
    if (right) direction.x += 1;

    direction.normalize();

    velocity.current
      .copy(direction)
      .applyQuaternion(state.camera.quaternion)
      .multiplyScalar(SPEED * delta);
    velocity.current.y = 0;

    state.camera.position.add(velocity.current);
  });

  return (
    <>
      <PointerLockControls />
    </>
  );
};

export default Player;
