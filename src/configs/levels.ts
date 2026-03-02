const tileMapping = {
  0: "road",
  1: "building",
};

interface Level {
  name: string;
  layout: number[][];
}

export const levels: Level[] = [
  {
    name: "Level 1",
    layout: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
  },
];
