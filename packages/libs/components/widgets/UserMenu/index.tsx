import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes } from '@betnomi/client/src/constants/routes';
import styles from './styles.module.scss';
import { PlayerLevel } from '../../../types/casino/levels';
import { LevelIcon } from '../../LevelIcon';
import { LevelColors, LevelNames } from '../../../constants/levels';
import Link from '../../Link';
import { FontIcon, FontIconName } from '../../FontIcon';

import imgConfirmed from '../../../assets/img/profile/confirmed.svg';
import imgUnconfirmed from '../../../assets/img/profile/unconfirmed.svg';
import { UserImage } from '@betnomi/libs/components/UserImage';
import classNames from 'classnames';

interface IProps {
  name: string;
  level: PlayerLevel;
  progress: number;
  onLogout: () => void;
  isMobile: boolean;
  confirmed: boolean;
  image: string;
}

const profileLinks: { link: string; title: string; icon: FontIconName }[] = [
  { link: Routes.ProfileRoot, title: 'Profile', icon: FontIconName.User },
  {
    link: `${Routes.ProfileRoot}/wallet`,
    title: 'Wallet',
    icon: FontIconName.Wallet1,
  },
  {
    link: `${Routes.ProfileRoot}/deposit`,
    title: 'Deposit',
    icon: FontIconName.Deposit,
  },
  {
    link: `${Routes.ProfileRoot}/withdraw`,
    title: 'Withdraw',
    icon: FontIconName.Withdraw,
  },
  {
    link: `${Routes.ProfileRoot}/bets`,
    title: 'Sports Bets',
    icon: FontIconName.Football,
  },
  {
    link: `${Routes.ProfileRoot}/transactions`,
    title: 'Transactions',
    icon: FontIconName.Transactions,
  },
  {
    link: `${Routes.ProfileRoot}/affiliates`,
    title: 'Affiliates',
    icon: FontIconName.Affiliates,
  },
  {
    link: `${Routes.ProfileRoot}/bonuses`,
    title: 'Bonuses',
    icon: FontIconName.Promo,
  },
  { link: '/#settings', title: 'Settings', icon: FontIconName.Settings },
];

const UserMenu: FC<IProps> = ({
  name, level, progress, onLogout, isMobile, confirmed, image
}) => {
  const { t } = useTranslation();
  const confirmedIcon = <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.confirmedIcon}><path d="M20.308 3.826c-3.832 0-7.804-3.608-7.843-3.644a.684.684 0 0 0-.93 0c-.04.037-4 3.644-7.843 3.644A.698.698 0 0 0 3 4.529v8.42c0 6.822 4.996 9.548 8.753 11.005a.683.683 0 0 0 .494 0C17.516 21.91 21 18.724 21 12.95V4.53a.698.698 0 0 0-.692-.704Z" fill="#6AD035"></path><path d="M17 9.497c0 .172-.06.318-.18.438l-4.672 4.671-.877.878a.598.598 0 0 1-.439.18.598.598 0 0 1-.439-.18l-.877-.877-2.335-2.336A.597.597 0 0 1 7 11.832a.6.6 0 0 1 .18-.439l.878-.877c.12-.12.267-.18.439-.18s.318.06.438.18l1.897 1.903 4.232-4.238a.6.6 0 0 1 .44-.181c.171 0 .318.06.438.18l.877.878a.6.6 0 0 1 .181.439Z" fill="#fff"></path></svg>;

  return (
    <>
      <div className={styles.profileHeader}>
        <div className={styles.profileWrapper}>
          <UserImage
            image={image}
            progress={progress}
            level={level}
          />
          <div className={styles.profileDetails}>
            <div className={styles.profileName}>
              {name}
            </div>
            <div className={classNames(styles.profileLevel, styles.profileLevelPrimary)} style={{ color: LevelColors[level] }}>
              {LevelNames[level]}
            </div>
          </div>
        </div>
        {confirmedIcon}
        <div
          className={styles.profileProgressBar}
          style={{ color: LevelColors[level] }}
        >
        </div>
        <div className={styles.profileProgress}>
          {`${progress}%`}
        </div>
        <div className={styles.profileProgressTotal}>
          100%
        </div>
      </div>
      <div className={styles.profileList}>
        {profileLinks.map((link) => (
          <Link to={link.link} className={styles.profileListItem} key={link.link} activeClass={styles.profileListItemActive}>
            <FontIcon name={link.icon} size={'s'} className={styles.profileListItemFontIcon} />
            <span>{t(link.title)}</span>
          </Link>
        ))}

        <span
          className={styles.profileListItem}
          onMouseDown={onLogout}
          onKeyDown={onLogout}
          role="button"
          tabIndex={-1}
        >
          <FontIcon name={FontIconName.Logout} size={'s'} className={styles.profileListItemFontIcon} />
          <span>{t('Logout')}</span>
        </span>
      </div>
    </>
  );
};

export { UserMenu };
