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
import styles from './styles.module.scss';
import classNames from 'classnames';
type Props = {
  type?: string
  columns: any,
  data: any,
  className?: string,
};
interface Data {
  name: string;
  username: string;
  bet: number;
  multiplier: number;
  payout: number;
}

export const Table: React.FC<Props> = ({ columns, data, className }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable<Data>({ columns, data }, useSortBy);
  return (
    <table className={classNames(styles.table, className)} {...getTableProps()}>
      <thead className={styles.head}>
        {headerGroups.map(headerGroup => (
          <tr className={styles.tr} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th className={classNames(styles.th, column?.className)} {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={styles.thBody} {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr className={classNames(styles.tr, { [styles.trOdd]: i % 2 })} {...row.getRowProps()}>
              {row.cells.map((cell: any) => {
                return <td className={classNames(styles.td, cell.column?.className)} {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}
