import React from 'react'
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon'
import styles from './styles.module.scss'
import classNames from 'classnames'

interface ICloseButtonProps {
  className: string
  onClick?: () => void
}

export const CloseButton: React.FC<ICloseButtonProps> = ({ className, onClick }) => {
  return <FontIcon name={FontIconName.Close} className={classNames(styles.close, className)} size={'s'} onClick={onClick} />
} 