import React, { FC, useCallback } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  size?: 'm';
  value: boolean;
  disabled?: boolean;
  onChange: (val: boolean) => void;
  preLabel?: string;
  label?: string;
  preLabelClassName?: string;
  labelClassName?: string;
  className?: string;
}

const Toggle: FC<Props> = ({
  value,
  onChange,
  size = 'm',
  preLabel,
  label,
  preLabelClassName,
  labelClassName,
  className
}) => {
  const onToggle = useCallback(
    (event) => {
      event.stopPropagation();
      event.preventDefault();
      onChange(!value);
    },
    [onChange, value],
  );
  return (
    <label
      className={classNames(styles.wrapper, className)}
      onClick={onToggle}
    >
      <input type="checkbox" className={styles.checkbox} checked={value} />
      {preLabel && <span className={classNames(styles.preLabel, preLabelClassName)}>{preLabel}</span>}
      <span className={classNames(styles.toggle, {
        [styles.sizeM]: size === 'm'
      })}></span>
      {label && <span className={classNames(styles.label, labelClassName)}>{label}</span>}
    </label>
  );
};

export { Toggle };
