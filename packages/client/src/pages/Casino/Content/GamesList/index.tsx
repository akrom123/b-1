import React, { FC } from 'react';
import styles from './styles.module.scss';
import { GameCard } from '@betnomi/libs/components/GameCard';
import classNames from 'classnames';

interface IProps {
  featured?: any
 }

const GamesList: FC<IProps> = ({featured}) => {
  return (
    <div className={styles.wrapper}>
      {
        featured &&
        <GameCard className={classNames(styles.item, styles.bigBanner)} />
      }
      {[...new Array(14)].map((item, index) => (
          <GameCard className={styles.item} />
      ))}
    </div>
  );
}

export { GamesList };