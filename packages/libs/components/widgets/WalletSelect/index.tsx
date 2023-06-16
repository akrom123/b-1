import React, { FC, useMemo, useRef } from 'react';
import { useHistory } from "react-router-dom"
import { keys } from 'ramda';
import classNames from 'classnames';
import { Manager, Popper, Reference } from 'react-popper';
import { CoinType } from '../../../types';
import Coin from '../../Coin';
import { FontIcon, FontIconName } from '../../FontIcon';
import Button from '../../Button';
import styles from './styles.module.scss';
import { useFocusEvent } from '../../../hooks/useFocusEvent';
import { usePopperDropdown } from '../../../hooks/ui/usePopperDropdown';
import { WalletSelectPopup } from '../WalletSelectPopup';
import { Balance } from '../../Balance';
import { useOnClickOutside } from '@betnomi/libs/hooks/useOnClickOutside';

export interface WalletSelectProps {
  balances: Partial<Record<CoinType, number>>;
  rates: Partial<Record<CoinType, number>>;
  selected: CoinType;
  onChange: (val: CoinType) => void;
  onDepositClick: () => void;
  onSettingsClick: () => void;
  viewInUSD: boolean
  setViewInUSD: (value: boolean) => void
}

const WalletSelect: FC<WalletSelectProps> = ({
  balances,
  selected,
  rates,
  onChange,
  onDepositClick,
  onSettingsClick,
  setViewInUSD,
  viewInUSD,
}) => {
  const { focused, onFocus, onBlur } = useFocusEvent();
  const modifiers = usePopperDropdown(0, 8);
  const history = useHistory();


  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => onBlur());


  const selectedCoin = useMemo(
    () => (keys(balances).includes(selected) ? selected : ''),
    [selected, balances],
  );

  const balance = useMemo(() => {
    if (viewInUSD) {
      return (rates[selected] || 0) * (balances[selected] || 0);
    }

    return balances[selected] || 0;
  }, [balances, rates, viewInUSD, selected]);

  return (
    <div className={styles.wrap} ref={ref}>
      <Button
        size="m"
        onClick={() => { history.push('/profile/wallet') }}
        className={styles.wallet}
      >
        <FontIcon name={FontIconName.Wallet} />
        Deposit
      </Button>
      <div className={styles.manager}>
        <Manager>
          <Reference>
            {({ ref }) => (
              <button
                className={styles.widget}
                ref={ref}
                onClick={!focused ? onFocus : onBlur}
              >
                <div className={styles.selected}>
                  {!!selectedCoin && <Coin coin={selected} size={'m'} />}

                  <span>{selectedCoin}</span>

                  <FontIcon name={FontIconName.IconArrowBottom} size={'xxs'} />
                </div>
                <div className={styles.balance}>
                  {viewInUSD && (<span>$</span>)}
                  <Balance value={balance} precision={6} />
                </div>
              </button>
            )}
          </Reference>

          <Popper modifiers={modifiers}>
            {({ style }) => (
              <div
                className={classNames(styles.popper, {
                  [styles.hidden]: !focused || keys(balances).length === 0,
                })}
                style={style}
              >
                <WalletSelectPopup
                  onSelect={onChange}
                  balances={balances}
                  rates={rates}
                  selected={selected}
                  onDepositClick={onDepositClick}
                  onSettingsClick={onSettingsClick}
                  viewInUSD={viewInUSD}
                  setViewInUSD={setViewInUSD}
                />
              </div>
            )}
          </Popper>
        </Manager>
      </div>
    </div>
  );
};

export { WalletSelect };
