import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import classNames from 'classnames';
import { coinNames, coinOrder, CoinType } from '../../types/ui';
import { TextInputWrap } from '../TextInput';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../FontIcon';
import Coin from '../Coin';
import { useFocusEvent } from '../../hooks/useFocusEvent';
import { usePopperDropdown } from '../../hooks/ui/usePopperDropdown';
import { Select, SelectColor } from '@betnomi/libs/components/Select';

interface IProps {
  selected: CoinType;
  onSelect: (val: CoinType) => void;
  disabled?: boolean;
  withName?: boolean;
  className?: string;
}

interface RowProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  coin: CoinType;
  withName?: boolean;
  className?: string;
}

const Row: FC<RowProps> = ({ coin, withName, className, }) => (
  <div className={classNames(styles.item, className)}>
    <Coin coin={coin} size={'l'} className={styles.coin} />
    {withName && <div className={styles.value}>{coin}</div>}
    <div className={styles.label}>{coinNames[coin]}</div>
  </div>
);

const CoinSelect: FC<IProps> = ({ selected, onSelect, disabled, withName }) => {

  return <Select
    optionClassName={styles.option}
    listboxClassName={styles.listbox}
    color={SelectColor.Secondary}
    valueRenderer={(option) => <button
      className={styles.root}
      type="button"
      disabled={disabled}
    >
      <Row
        coin={selected}
        withName={withName}
      />
    </button>}
    optionRenderer={(item) =>
      <Row
        coin={item.value}
        withName={withName}
      />
    }
    variants={coinOrder.filter((coin) => coin !== selected).map(coin => ({ label: coin, value: coin }))}
    onChange={(item) => onSelect(item.value)}
    value={{ label: selected, value: selected }}
  />

};
export { CoinSelect };
