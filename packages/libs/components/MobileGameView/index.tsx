import React from 'react';
import styles from './styles.module.scss'
import Button from '@betnomi/libs/components/Button';
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon';
import { CloseButton } from '@betnomi/libs/components/CloseButton';
import { ButtonColor } from '@betnomi/libs/types';

interface IMobileGameViewProps {
  onClose: () => void
}

export const MobileGameView: React.FC<IMobileGameViewProps> = ({onClose}) => {
  return <div className={styles.gameDrawer}>
    <div className={styles.content}>
      <CloseButton className={styles.closeIcon} onClick={onClose}/>
      <div className={styles.gameImg}>
        <img
          src={'https://images.betnomi.com/8be03935-91dd-44f4-a47c-044d4f88af6cn?auto=format&fit=max&w=256&q=10'} />
      </div>
      <div className={styles.gameInfo}>
        <div className={styles.description}>
          <div>
            <img src="https://images.betnomi.com/ab1c8a81-fdb3-4845-a0dc-ff79a823fef0?auto=format&fit=max&w=128&q=30" alt="" className={styles.providerIcon} />
          </div>
          <h3>Booming Seven Deluxe</h3>
          <span className={styles.rtp}>
            RTP -
            <span className={styles.rtpPercentage}>
              96.55%
            </span>
          </span>
        </div>
        <div className={styles.playButtons}>
          <Button size="m" className={styles.button}>
            <FontIcon name={FontIconName.PlaySecondary} />
            Play now
          </Button>
          <Button size="m" className={styles.button} color={ButtonColor.SecondaryAlt}>
            <FontIcon name={FontIconName.PlaySecondary} />
            Fun Play
          </Button>
        </div>
      </div>
    </div>
  </div>
}