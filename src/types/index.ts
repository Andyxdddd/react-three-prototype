type TileType = 0 | 1 | 2 | 3; // 0: grass, 1: road, 2: building 1, 3: building 2

interface LevelType {
  name: string;
  layout: TileType[][];
  playerStartPosition?: [number, number, number];
}

export type { TileType, LevelType };
