import createReducer from '@betnomi/libs/utils/createReducer';
import { GameState } from '../../types/store/game';
import { gameHandlers } from './handlers';

export const gameInitialState: Readonly<GameState> = {
  active: false,
};

export default createReducer(gameInitialState, gameHandlers);
