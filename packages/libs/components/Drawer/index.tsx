import React, { useEffect } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import styles from './styles.module.scss'
import classNames from 'classnames';


interface IDrawerProps {
  active?: boolean
  onClose?: () => void
}

export const Drawer: React.FC<IDrawerProps> = ({ children, active, onClose }) => {
  useEffect(() => {
    if (!active) {
      return;
    }

    disablePageScroll();
    return () => enablePageScroll();
  }, [active])

  return <div className={classNames(styles.drawer, { [styles.visible]: active })}>
    <div className={styles.overlay} onClick={onClose}></div>
    <div className={styles.container}>
      {children}
    </div>
  </div>
}