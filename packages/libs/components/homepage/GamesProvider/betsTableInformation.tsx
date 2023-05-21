import React from 'react';
import { useTable, Column, useSortBy } from "react-table";
import { FontIconName, FontIcon } from '@betnomi/libs/components/FontIcon';
import Binance from '@betnomi/libs/assets/img/coins/binancecoin.svg';
import Bitcoin from '@betnomi/libs/assets/img/coins/bitcoin.svg';
import BitcoinCash from '@betnomi/libs/assets/img/coins/bitcoincash.svg';
import Doge from '@betnomi/libs/assets/img/coins/doge.svg';
import Etereum from '@betnomi/libs/assets/img/coins/ethereum.svg';
import Lite from '@betnomi/libs/assets/img/coins/litecoin.svg';
import Ripple from '@betnomi/libs/assets/img/coins/ripple.svg';
import Tether from '@betnomi/libs/assets/img/coins/tether.svg';
import Tron from '@betnomi/libs/assets/img/coins/tron.svg';
import Zcash from '@betnomi/libs/assets/img/coins/zcash.svg';
import Hidden from '@betnomi/libs/assets/img/hidden.svg';
import styles from './styles.module.scss';
import classNames from 'classnames';



interface IColumnData {
  name: string;
  payout: IPayout;
}

interface Data {
  name: string;
  username: string;
  bet: IBet;
  multiplier: number;
  payout: IPayout;
}

interface IBet {
  value: number,
  name: string
}

interface IPayout {
  value: number,
  name: string
}

const SelectFooball = (value: string) => {
  switch (value) {
    case "Football": return `${FontIconName.Football}`;
    case "Cricket": return `${FontIconName.Cricket}`;
    case "Handball": return `${FontIconName.Handball}`;
    case "MMA": return `${FontIconName.MMA}`;
    case "Baseball": return `${FontIconName.Baseball}`;
    default: return ''
  }
}

export const columns: any[] = [
  {
    Header: "Game",
    accessor: "name",
    Cell: (game: any) => (
      <div className={styles.game}>
        <FontIcon name={SelectFooball(game.value)} size={'m'} className={styles.gameIcon} />
        <span className={styles.headingFootballer}>{game.value}</span>
      </div>
    ),
    className: styles.gameCell,
  },
  {
    Header: "User",
    accessor: "username",
    Cell: ({ value }: any) => (
      <div className={styles.user}>
        {value !== "" ? (<span className={styles.headingWhite}>{value}</span>) : (
          <>
            <img src={Hidden} alt="icon" className={styles.imgHidden} />
            <span className={styles.headingButton}>Hidden</span>
          </>
        )}
      </div>
    ),
    className: styles.userCell
  },
  {
    Header: () => <div className={styles.bet}>Bet</div>,
    accessor: "bet",
    Cell: ({ value }: any) => (
      <div className={styles.bet}>
        <span className={styles.headingButton}>{value.value}</span>
        <img src={value.name} alt="icon" className={styles.img} />
      </div>
    ),
    className: styles.betPadding
  },
  {
    Header: () => <div className={styles.multiplier}>Multiplier</div>,
    accessor: "multiplier",
    Cell: ({ value }: any) => (
      <div className={styles.multiplier}>
        <span className={styles.headingButton}>{`${value}x`}</span>
      </div>
    ),
  },
  {
    Header: () => <div className={classNames(styles.bet, styles.payout)}>Payout</div>,
    accessor: "payout",
    Cell: ({ value }: any) => (
      <div className={classNames(styles.bet, styles.payout, value.value > 0 ? styles.win : '')}>
        <span>{value.value}</span>
        <img src={value.name} alt="icon" className={styles.img} />
      </div>
    ),
  },
];

export const data: Data[] = [
  {
    name: "Football",
    username: "ashegen",
    bet: {
      name: BitcoinCash,
      value: 123.21
    },
    multiplier: 2.33,
    payout: {
      name: Doge,
      value: -9.24000023
    },
  },
  {
    name: "Baseball",
    username: "jayveel1987",
    bet: {
      name: Doge,
      value: 123.21
    },
    multiplier: 4.01,
    payout: {
      name: Doge,
      value: 9.24000056
    },
  },
  {
    name: "Cricket",
    username: "bot01",
    bet: {
      name: Bitcoin,
      value: 123.21
    },
    multiplier: 1.03,
    payout: {
      name: Doge,
      value: 9.24000034
    },
  },
  {
    name: "Football",
    username: "",
    bet: {
      name: Doge,
      value: 123.21
    },
    multiplier: 12.01,
    payout: {
      name: Doge,
      value: 9.24000002
    },
  },
  {
    name: "MMA",
    username: "",
    bet: {
      name: Bitcoin,
      value: 9.24000003
    },
    multiplier: 2.08,
    payout: {
      name: Doge,
      value: 9.24000004
    },
  },
  {
    name: "Handball",
    username: "baltoro",
    bet: {
      name: Bitcoin,
      value: 9.24000003
    },
    multiplier: 6.01,
    payout: {
      name: Doge,
      value: 9.24000003
    },
  },
  {
    name: "Football",
    username: "string",
    bet: {
      name: Tron,
      value: 123.21
    },
    multiplier: 5.09,
    payout: {
      name: Doge,
      value: 9.24000009
    },
  },
];

export const columnsS: any[] = columns.filter(c => c.accessor === 'name' || c.accessor === 'username' || c.accessor === 'payout')

export const columnsXS: any[] = columns.filter(c => c.accessor === 'name' || c.accessor === 'payout')