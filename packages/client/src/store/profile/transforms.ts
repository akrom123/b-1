import { CoinType } from '@betnomi/libs/types';

export const transformCoinToNomipayCurrency = (coin: CoinType) => {
  switch (coin) {
    case CoinType.trc20:
      return 'USDT_TRX';
    case CoinType.erc20:
      return 'USDT';
    case CoinType.bep20:
      return 'USDT_BNB';
    default:
      return coin;
  }
};
