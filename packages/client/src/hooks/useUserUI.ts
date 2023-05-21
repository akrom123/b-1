import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useShallowSelector } from './index';
import { selectAuthUI } from '../store/auth/selectors';
import { authSetUI } from '../store/auth/actionCreators';

export const useUserUI = () => {
  const dispatch = useDispatch();

  const { isChatActive, isMenuActive } = useShallowSelector(selectAuthUI);

  const setIsChatActive = useCallback(
    (val: boolean) => {
      dispatch(authSetUI({ isChatActive: val }))

    },
    [dispatch],
  );

  const setIsMenuActive = useCallback(
    (val: boolean) => {
      dispatch(authSetUI({ isMenuActive: val }))

    },
    [dispatch],
  );

  return {
    isChatActive, isMenuActive, setIsChatActive, setIsMenuActive,
  };
};
