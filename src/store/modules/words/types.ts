/**
 * Action Types
 */
export enum WordsTypes {
  UPDATE_PLAYED_WORDS = '@words/UPDATE_PLAYED_WORDS',
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