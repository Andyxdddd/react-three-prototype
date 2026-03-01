import { useFrame } from "@react-three/fiber";
import { PointerLockControls, useKeyboardControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useSetAtom } from "jotai";
import { coordinatesAtom } from "../data/atoms";

const WALK_SPEED = 5;
const SPRINT_SPEED = 10;

const Player = () => {
  const [_, get] = useKeyboardControls();
  const velocity = useRef(new THREE.Vector3());
  const direction = new THREE.Vector3();
  const updateCoordinates = useSetAtom(coordinatesAtom);

  useFrame((state, delta) => {
    const { forward, backward, left, right, sprint } = get();

    direction.set(0, 0, 0);

    if (forward) direction.z -= 1;
    if (backward) direction.z += 1;
    if (left) direction.x -= 1;
    if (right) direction.x += 1;

    direction.normalize();

    velocity.current
      .copy(direction)
      .applyQuaternion(state.camera.quaternion)
      .multiplyScalar(sprint ? SPRINT_SPEED * delta : WALK_SPEED * delta);
    velocity.current.y = 0;

    state.camera.position.add(velocity.current);
    
    updateCoordinates({
      x: state.camera.position.x,
      y: state.camera.position.y,
      z: state.camera.position.z,
    });
  });

  return (
    <>
      <PointerLockControls />
    </>
  );
};

export default Player;
