import React, {
  FC, useState,
} from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { FontIcon } from '@betnomi/libs/components/FontIcon';

export type ChipsProps = {
  items: {
    icon?: string,
    title: string,
    className?: string
  }[],
  className?: string
  bordered?: boolean
};

export const Chips: FC<ChipsProps> = ({
  items,
  className,
  bordered = false
}) => {
  const [active, setActive] = useState(0);
  return <div className={classNames(styles.wrapper, className)}>
    {
      items.map((item, idx) => (
        <button
          className={classNames(
            styles.chip, active === idx && styles.active,
            item.className,
            {
              [styles.bordered]: bordered
            }
          )}
          onClick={() => setActive(idx)}
        >
          {
            item.icon && <FontIcon name={item.icon} />
          }
          {item.title}
        </button>
      ))
    }
  </div>
};