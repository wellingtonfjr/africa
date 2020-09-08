
export enum GameTypes {
  UPDATE_LEVEL_CURRENT = '@game/UPDATE_LEVEL_CURRENT',
  GET_LEVEL_CURRENT = '@game/GET_LEVEL_CURRENT',
}

export enum Levels {
  'Descreva a palavra' = 0,
  'Mimica' = 1,
  'Única palavra' = 2
}

export interface Game {
  level: string,
}

export interface GameState {
  level: string,
}
