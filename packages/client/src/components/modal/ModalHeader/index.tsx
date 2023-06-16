import React, { FC } from 'react';
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon';
import { LineDivorce } from '@betnomi/libs/components';
import styles from './styles.module.scss';
import { CloseButton } from '@betnomi/libs/components/CloseButton';

type Props = {
  onClose?: () => void;
};

export const ModalHeader: FC<Props> = ({
  onClose, children,
}) =>
(
  <div className={styles.wrapper}>
    <div className="content">
      {children}
    </div>
    <CloseButton
      className={styles.close}
      onClick={onClose}
    />
  </div>
);
