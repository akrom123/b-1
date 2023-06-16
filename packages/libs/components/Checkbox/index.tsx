import React, { FC, useCallback } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../FontIcon';

export enum CheckboxColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary'
}

interface IProps {
  checked: boolean;
  onCheck: (val: boolean) => void;
  className?: string;
  hasError?: boolean;
  color?: CheckboxColor
  labelClassName?: string
}

const Checkbox: FC<IProps> = ({
  checked, onCheck, children, className, hasError, color = CheckboxColor.Primary, labelClassName
}) => {
  const onMouseDown = () => {
    onCheck(!checked);
  };

  return (
    <label
      className={classNames(styles.wrapper, className, { [styles.error]: hasError }, styles[color])}
      onMouseDown={onMouseDown}
    >
      <input className={styles.checkbox} type="checkbox" checked={checked} />
      <FontIcon name={FontIconName.Checked} className={styles.icon} />
      {!!children && <div className={classNames(styles.label, labelClassName)}>{children}</div>}
    </label>
  );
};

export { Checkbox };
