import React, { useCallback } from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import classNames from 'classnames';

type Props = {
  to: string;
  className?: string;
  activeClass?: string;
  stopPropagation?: boolean;
};

const Link: React.FC<Props> = ({
  to,
  className,
  activeClass,
  children,
}) => {
  const stoper = useCallback((e) => e.stopPropagation(), []);
  return (
    <NavLink to={to} exact activeClassName={classNames(styles.active, activeClass)} className={cx(className)} onMouseDown={stoper}>
      {children}
    </NavLink>
  );
};

export default Link;
