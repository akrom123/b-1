import React, { DetailedHTMLProps, FC, HTMLAttributes, HTMLProps, useCallback, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../FontIcon';
import { TextInputColor } from '../../types/ui';

interface ITextInputWrapProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  color?: TextInputColor;
  error?: boolean;
}

export const TextInputWrap: FC<ITextInputWrapProps> = ({
  color = TextInputColor.Primary,
  children, ref, className, error, ...props
}) => (
  <div
    className={classNames(
      styles.wrap,
      className, { [styles.wrapError]: error, [styles.wrapSecondary]: color === TextInputColor.Secondary },
    )}
    ref={ref}
    {...props}
  >
    {children}
  </div>
);

export interface TextInputProps extends HTMLProps<HTMLInputElement> {
  color?: TextInputColor;
  inputClasses?: string;
  left?: JSX.Element | string;
  right?: JSX.Element | string;
  error?: boolean;
  hasError?: boolean;
  handleClearBtn?: any;
  className?: string;
}

const IconRenderer: FC<{ error?: boolean }> = ({ children, error }) =>
(children ? (
  <div className={classNames(styles.icon, { [styles.iconText]: typeof children === 'string', [styles.error]: error })}>
    {children}
  </div>
) : null);

const TextInput: FC<TextInputProps> = ({
  color = TextInputColor.Primary,
  type = 'text',
  inputClasses,
  left,
  right,
  hasError,
  className,
  ...props }) => {
  const [revealed, setRevealed] = useState(false);
  const toggleRevealed = useCallback(() => setRevealed(!revealed), [setRevealed, revealed]);

  return (
    <TextInputWrap error={hasError} className={className} color={color}>
      <IconRenderer error={hasError}>{left}</IconRenderer>

      <input type={revealed ? 'text' : type} {...props} className={classNames(styles.input, inputClasses)} />

      <IconRenderer>{right}</IconRenderer>

      {type === 'password' && (
        <IconRenderer>
          <button className={styles.reveal} onClick={toggleRevealed} type="button">
            <FontIcon name={FontIconName.View} size={'s'} />
          </button>
        </IconRenderer>
      )}

      {type === 'search' && props.value && (
        <button className={styles.search} onClick={props.handleClearBtn} type="button">
          <FontIcon name={FontIconName.Close} size={'s'} />
        </button>
      )}
    </TextInputWrap>
  );
};

export { TextInput };
