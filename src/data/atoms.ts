import { atom } from "jotai";

export type Coordinates = {
  x: number;
  y: number;
  z: number;
};

export const coordinatesAtom = atom<Coordinates | null>(null);
