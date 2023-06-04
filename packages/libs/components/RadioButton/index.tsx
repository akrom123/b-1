import React, { FC, useCallback } from 'react';
import classNames from 'classnames';
import { FontIcon, FontIconName } from '../FontIcon';
import styles from './styles.module.scss';

export enum RadioColor {
  Primary = 'primary',
  Secondary = 'secondary'
}

interface IProps {
  checked: boolean;
  onCheck: (val: boolean) => void;
  className?: string;
  hasError?: boolean;
  disabled?: boolean;
  value?: any;
  color?: RadioColor
}

const RadioButton: FC<IProps> = ({
  checked, onCheck, children, className, hasError, disabled, value, color = RadioColor.Primary
}) => {
  const onMouseDown = useCallback((event) => {
    if (disabled) {
      return;
    }
    event.stopPropagation();
    event.preventDefault();
    onCheck(!checked);
  }, [checked, disabled]);

  return (
    <label
      className={classNames(
        styles.radioWrapper,
        className,
        styles[color],
        { [styles.disabled]: disabled },
        { [styles.error]: hasError },
      )}
      onMouseDown={onMouseDown}
    >
      <input type={'radio'} value={value} className={styles.radio} checked={checked} />
      <FontIcon name={FontIconName.Close} size={'xxs'} className={styles.icon} />
      {!!children && <span className={styles.label}>{children}</span>}
    </label>
  );
};

export { RadioButton };
