import React, { ChangeEventHandler, FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { isNil } from 'ramda';
import classNames from 'classnames';
import { TextInput, TextInputProps } from '../TextInput';
import styles from './styles.module.scss';
import { TextInputColor } from '@betnomi/libs/types';

interface IProps extends TextInputProps {
  amount?: number;
  min: string;
  max: number;
  precision?: number;
  onChangeAmount: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const WithdrawAmountInput: FC<IProps> = ({ max, min, amount, onChangeAmount, ...props }) => {
  const { t } = useTranslation('main');

  const onClickMax = useCallback(() => onChangeAmount({ target: { value: max } } as any), [max, onChangeAmount]);

  return (
    <TextInput
      right={(
        <button className={styles.max} type="button" onClick={onClickMax}>
          {t('MAX')}
        </button>
      )}
      type="number"
      onChange={onChangeAmount}
      placeholder={`${t('Minimum')} ${min}`}
      min={0}
      step="any"
      value={isNil(amount) ? '' : amount}
      className={classNames(styles.mobile_margin, styles.background)}
      color={TextInputColor.Secondary}
      {...props}
    />
  );
};

export { WithdrawAmountInput };
