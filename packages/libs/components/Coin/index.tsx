import React from 'react';
import { coinIcons, CoinType } from '../../types/ui';
import { coins } from '../../assets/img/coins';
import classNames from 'classnames';
import styles from './styles.module.scss'

type Props = {
  coin: CoinType;
  className?: string;
  size?: 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
};

const Coin: React.FC<Props> = ({ coin, className, size = 'm' }) => {
  const name = coinIcons[coin];
  const src = coins[coin];

  return (
    <img
      src={src}
      alt={name}
      className={classNames(className,
        styles.coin,
        {
          [styles.coinSizeM]: size === 'm',
          [styles.coinSizeL]: size === 'l',
          [styles.coinSizeXL]: size === 'xl',
          [styles.coinSizeXXL]: size === 'xxl',
          [styles.coinSizeXXXL]: size === 'xxxl',
        })}
    />
  );
};

export default Coin;
