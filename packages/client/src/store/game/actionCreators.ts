import { GameState } from 'types/store/game';
import { GameActionTypes } from './actionsTypes';

export const gameSetState = (payload: Partial<GameState>) => ({
  type: GameActionTypes.SetState,
  payload,
});

export const gameShow = () => ({
  type: GameActionTypes.Show,
});

export const gameHide = () => ({
  type: GameActionTypes.Hide,
});
