import React, { FC, useCallback } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  size?: 'm';
  value: boolean;
  disabled?: boolean;
  onChange: (val: boolean) => void;
}

const Toggle: FC<Props> = ({
  value, onChange, size = 'm', disabled,
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
    <button
      className={classNames(styles.toggle, {
        [styles.active]: value,
        [styles.disabled]: disabled,
        [styles.sizeM]: size === 'm'
      })}
      onMouseDown={onToggle}
    ></button>
  );
};

export { Toggle };
