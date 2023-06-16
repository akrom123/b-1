import React, { CSSProperties } from 'react';
import { ModalHeader } from '../ModalHeader';
import styles from './styles.module.scss';
import classNames from 'classnames';

type Props = {
  onClose: () => void;
  title?: JSX.Element | string;
  style?: CSSProperties;
  className?: string;
};

export const HocModal: React.FC<Props> = ({
  children, onClose,
  title, style, className,
}) => (
  <div className={classNames(styles.out, className)} style={style}>
    <ModalHeader onClose={onClose}>
      {title}
    </ModalHeader>
    {children}
  </div>
);
