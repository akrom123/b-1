import React, {
  ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren,
} from 'react';
import cx from 'classnames';
import { ButtonColor } from '../../types';
import Loader from '../Loader';
import styles from './styles.module.scss';

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: string,
  size?: 's' | 'm' | 'xs',
  fullWidth?: boolean,
  onClick?: (event: React.MouseEvent) => void,
  isLoading?: boolean,
  inverse?: boolean,
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  color = ButtonColor.Primary,
  inverse = false,
  size = 'm',
  fullWidth = false,
  onClick = () => { },
  className,
  type = 'button',
  children,
  disabled,
  isLoading,
  ...rest
}) => (
  <button
    type={type}
    className={cx(
      styles.button,
      styles[color],
      className,
      {
        [styles.full_width]: fullWidth,
        [styles['size--m']]: size === 'm',
        [styles['size--s']]: size === 's',
        [styles['size--xs']]: size === 'xs',
        [styles.inverse]: inverse,
      },

    )}
    style={{ height: size }}
    onClick={onClick}
    disabled={disabled || isLoading}
    {...rest}
  >
    {isLoading ? <Loader /> : (
      children
    )}
  </button>
);

export default Button;
