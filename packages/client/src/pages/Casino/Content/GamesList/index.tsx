import React, { FC, useCallback } from 'react';
import styles from './styles.module.scss';
import { GameCard } from '@betnomi/libs/components/GameCard';
import classNames from 'classnames';
import { gameShow } from 'store/game/actionCreators';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

interface IProps {
  featured?: any
}

const GamesList: FC<IProps> = ({ featured }) => {
  const dispatch = useDispatch()
  const { push } = useHistory()
  const smScreen = window.matchMedia('(max-width:639px)').matches;
  const openDrawer = useCallback(
    () => {
      smScreen ? dispatch(gameShow()) : push('/game/123')
    },
    [],
  );
  return (
    <div className={styles.wrapper}>
      {
        featured &&
        <GameCard className={classNames(styles.item, styles.bigBanner)} handlePlayGame={openDrawer} />
      }
      {[...new Array(14)].map((item, index) => (
        <GameCard className={styles.item} handlePlayGame={openDrawer} />
      ))}
    </div>
  );
}

export { GamesList };