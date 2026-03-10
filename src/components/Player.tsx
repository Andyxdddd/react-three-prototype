import { useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  PointerLockControls,
  useKeyboardControls,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useSetAtom } from "jotai";
import { coordinatesAtom } from "../data/atoms";
import {
  DEFAULT_CAMERA_HEIGHT,
  SPRINT_SPEED,
  WALK_SPEED,
} from "../configs/consts";

interface PlayerProps {
  position?: [number, number, number];
}

const Player = ({ position = [0, DEFAULT_CAMERA_HEIGHT, 0] }: PlayerProps) => {
  const [, get] = useKeyboardControls();
  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());
  const updateUICoordinates = useSetAtom(coordinatesAtom);

  useFrame((state, delta) => {
    if (state.camera.position.length() === 0) {
      state.camera.position.set(position[0], position[1], position[2]);
      state.camera.lookAt(
        new THREE.Vector3(
          position[0] + 1, // look to the right
          position[1],
          position[2],
        ),
      );
    }

    const { forward, backward, left, right, sprint } = get();

    direction.current.set(0, 0, 0);

    if (forward) direction.current.z -= 1;
    if (backward) direction.current.z += 1;
    if (left) direction.current.x -= 1;
    if (right) direction.current.x += 1;

    direction.current.normalize();

    velocity.current
      .copy(direction.current)
      .applyQuaternion(state.camera.quaternion)
      .multiplyScalar(sprint ? SPRINT_SPEED * delta : WALK_SPEED * delta);
    velocity.current.y = 0;

    state.camera.position.add(velocity.current);

    updateUICoordinates({
      // Performance optimization needed to prevent unnecessary re-renders
      x: state.camera.position.x,
      y: state.camera.position.y,
      z: state.camera.position.z,
    });
  });

  return (
    <>
      <PerspectiveCamera makeDefault />
      <PointerLockControls />
    </>
  );
};

export default Player;
