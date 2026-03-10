type TileType = 0 | 1 | 2 | 3; // 0: empty, 1: road, 2: residential building, 3: boundary wall

interface LevelType {
  name: string;
  layout: TileType[][];
  playerStartPosition?: [number, number, number];
}

export type { TileType, LevelType };
