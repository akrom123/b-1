import { ActionFn } from '@betnomi/libs/types/redux';
import { GameActionTypes } from './actionsTypes';
import { gameHide, gameSetState, gameShow } from './actionCreators';
import { GameState } from '../../types/store/game';

type GameHandlerFn<F extends (...args: any[]) => any> = ActionFn<GameState, ReturnType<F>>;

const setState: GameHandlerFn<typeof gameSetState> = (
  state,
  { payload },
) => ({
  ...state,
  ...payload,
});

const show: GameHandlerFn<typeof gameShow> = (
  state,
) => ({
  ...state,
  active: true,
});

const hide: GameHandlerFn<typeof gameHide> = (
  state,
) => ({
  ...state,
  active: false,
});

export const gameHandlers = {
  [GameActionTypes.SetState]: setState,
  [GameActionTypes.Show]: show,
  [GameActionTypes.Hide]: hide,
};
