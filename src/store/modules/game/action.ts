import { GameTypes } from './types'

export const getLevel = () => ({
  type: GameTypes.GET_LEVEL_CURRENT,
});

export const updateLevel = () => {
  return {
    type: GameTypes.UPDATE_LEVEL_CURRENT
  }
}