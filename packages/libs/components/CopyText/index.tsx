import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import cx from 'classnames';
import { FontIcon, FontIconName } from '../FontIcon';
import styles from './styles.module.scss';

export enum CopyTextColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

type Props = {
  text: string;
  disabled?: boolean;
  onCopy?: () => void;
  color?: CopyTextColor;
};

export const CopyText: React.FC<Props> = ({ text, disabled, onCopy, color = CopyTextColor.Primary }) => (
  <div className={cx(
    styles.wrapper,
    styles[color],
    { [styles.disabled]: disabled },
  )}
  >
    <div className={styles.text}>{text}</div>
    <CopyToClipboard text={text} onCopy={onCopy}>
      <div className={styles.iconWrapper}>
        <FontIcon name={FontIconName.Copy} size={'s'} className={styles.icon} />
      </div>
    </CopyToClipboard>
  </div>
);
