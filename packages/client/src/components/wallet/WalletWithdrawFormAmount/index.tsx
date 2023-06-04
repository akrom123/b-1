import React, { ChangeEventHandler, FC } from 'react';
import classNames from 'classnames';
import { WithdrawAmountInput } from '@betnomi/libs/components/WithdrawAmountInput';
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon';
import { Button } from '@betnomi/libs/components';
import { CoinType } from '@betnomi/libs/types';
import styles from '../WalletWithdrawForm/styles.module.scss';
import { useTranslation } from '../../../i18n';

interface Props {
  balance: number;
  coin: CoinType;
  amount?: number;
  onChangeAmount: ChangeEventHandler<HTMLInputElement>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  limit: number;
  limitLeft: number;
  total: number;
  fee: number;
  precision?: number;
  isLoading: boolean;
}

const WalletWithdrawFormAmount: FC<Props> = ({
  total,
  balance,
  coin,
  amount,
  errors,
  touched,
  limit,
  limitLeft,
  fee,
  precision = 8,
  isLoading,
  onChangeAmount,
}) => {
  const { t } = useTranslation('profile');

  return (
    <>
      <div className={classNames(styles.label, styles.mobile_direction)}>
        <p className={styles.mobile_label_margin}>{t('Withdraw amount')}</p>
        <span className={classNames(styles.right)}>
          <span className={styles.white}>{`${balance} ${coin} `}
          </span>
        </span>
      </div>

      <WithdrawAmountInput
        amount={amount}
        max={balance}
        min={'0.00001'}
        onChangeAmount={onChangeAmount}
        hasError={!!(errors.amount && touched.amount)}
        disabled={isLoading}
        inputClasses={styles.input}
      />

      <div className={classNames(styles.footer)}>
        <div className={styles.label}>{t('Receive amount')}</div>
        <div className={styles.total}>
          {`${parseFloat(total.toFixed(precision))} ${coin}`}
        </div>
        <div className={styles.fee}>
          {t('{{fee}} {{coin}} network fee included', { fee, coin })}

          <FontIcon name={FontIconName.Info} size={'s'} />
        </div>

        <Button type="submit" isLoading={isLoading} fullWidth>
          {t('Withdraw')}
        </Button>
      </div>
    </>
  );
};

export { WalletWithdrawFormAmount };
