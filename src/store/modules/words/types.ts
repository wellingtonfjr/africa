/**
 * Action Types
 */
export enum WordsTypes {
  UPDATE_PLAYED_WORDS = '@words/UPDATE_PLAYED_WORDS',
  MOUNT_RANDOM_WORDS_TO_PLAYED = '@words/MOUNT_RANDOM_WORDS_TO_PLAYED',
  RESET_WORDS_PLAYED = '@words/RESET_WORDS_PLAYED'
}

/**
 * Data types
 */
 export interface Words {
  name: string,
 }

 /**
 * State type
 */

export interface WordsState {
  words: string[],
  playedWords: string[]
}