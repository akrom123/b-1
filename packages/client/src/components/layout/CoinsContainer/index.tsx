import React from 'react';
import { Coin } from '@betnomi/libs/components';
import { CoinType } from '@betnomi/libs/types/ui';
import { values } from 'ramda';
import styles from './styles.module.scss';
import classNames from 'classnames';

const coins = [
  {
    el: CoinType.bitcoin,
  },
  {
    el: CoinType.ethereum,
  },
  {
    el: CoinType.bitcoincash,
  },
  {
    el: CoinType.litecoin,
  },
  {
    el: CoinType.binancecoin,
  },
  {
    el: CoinType.ripple,
  },
  {
    el: CoinType.doge,
  },
  {
    el: CoinType.tron,
    a: true,
  },
  {
    el: CoinType.tether,
    a: true,
  },
  {
    el: CoinType.dash,
    a: true,
  },
  {
    el: CoinType.zcash,
    a: true,
  },

]

const CoinsContainer: React.FC<{ isMobile?: boolean }> = ({ isMobile }) => (
  <div className={styles.container}>
    {coins.map(({ el, a }) => (
      <Coin
        coin={el}
        key={el}
        className={classNames(
          styles.coin,
          {
            [styles.coinA]: a
          }
        )}
        size='xxxl'
      />
    ))}
  </div>
);

export default CoinsContainer;
