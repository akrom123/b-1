import { ModalState } from './modal';
import { AuthState } from './auth';
import { ChatState } from './chat';
import { HomeState } from './home';
import { RatesState } from './rates';
import { ProfileState } from './profile';
import { GameState } from './game';

export interface State {
  auth: AuthState
  chat: ChatState
  home: HomeState
  modal: ModalState
  rates: RatesState
  profile: ProfileState
  game: GameState
}
