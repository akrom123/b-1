import React, { FC } from 'react';
import styles from './styles.module.scss';
import Ellips from '@betnomi/libs/assets/img/promotions/Ellipse1.png';
import Round2 from '@betnomi/libs/assets/img/promotions/Round1.png';
import BackgroundImage from '@betnomi/libs/assets/img/promotions/background1.png';
import Union from '@betnomi/libs/assets/img/promotions/Union.png';
import SummerDots from '@betnomi/libs/assets/img/promotions/background2.png';


interface IProps {
  title: string,
  para: string,
  round: string

}

const Promotions = ({ round, title, para }: any) => (
  <div className={styles.promotionMain}>
    <div className={styles.promotionInner}>
      <img src="https://images.betnomi.com/f231fcee-3403-43ec-8612-54d8b415cc88?auto=format&fit=max&w=3840&q=70" alt="" />
    </div>
    <div className={styles.promotionHeadingBlock}>
      <h2 className={styles.headingPromotion}>{title}</h2>
      <span className={styles.promoPara} dangerouslySetInnerHTML={{ __html: para }}></span>
      <span className={styles.promo}>Promo</span>
    </div>
  </div>
);

export { Promotions };