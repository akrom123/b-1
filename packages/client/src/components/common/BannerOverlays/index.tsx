import React, { FC } from 'react';

import styles from './styles.module.scss';
import { playBtn } from '@betnomi/libs/components/GameOverlay/styles.module.scss';
import playIcon from '@betnomi/libs/assets/img/icons/play.svg';
import Button from '@betnomi/libs/components/Button';
import cx from 'classnames';

type IProps = {}

export const bannerHomeOverlay: FC<IProps> = (item: any) => {
  return (
    <div className={cx(styles.bannerOverlay, styles.homeBanOverlay)}>
      <div className={styles.mainBlock}>
        <h3 className={styles.title} dangerouslySetInnerHTML={{ __html: item.title }}></h3>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: item.text }}
          style={{ color: item.textColor }}
        ></p>
        <div className={styles.buttonWrapper}>
          <Button inverse className={styles.button}>Claim Bonus</Button>
        </div>
      </div>
    </div >
  )
}
