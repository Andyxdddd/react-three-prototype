type TileType = 0 | 1 | 2 | 3; // 0: empty, 1: road, 2: residential building, 3: boundary wall

interface Level {
  name: string;
  layout: TileType[][];
}

export const levels: Level[] = [
  {
    name: "Level 1",
    layout: [
      [3, 3, 3, 3, 3, 3, 3],
      [3, 0, 2, 0, 1, 0, 3],
      [3, 0, 2, 0, 1, 0, 3],
      [3, 0, 0, 0, 0, 0, 3],
      [3, 2, 1, 0, 2, 2, 3],
      [3, 0, 0, 0, 0, 0, 3],
      [3, 3, 3, 3, 3, 3, 3],
    ],
  },
];
