import React from 'react';
import { Link } from '@betnomi/libs/components';
import { useTranslation } from '@betnomi/libs/utils/i18n';
import styles from './styles.module.scss';

type Props = {
  label: string;
  items: { label: string, to: string }[]
};

export const FooterNavItem: React.FC<Props> = ({ items, label }) => {
  const { t } = useTranslation('main');
  return (
    <div>
      <ul className={styles.navGrp}>
        <li className={styles.navLabel}>
          {t(label)}
        </li>
        {items.map((el) => (
          <li className={styles.navItem} key={el.label}>
            <Link to={el.to}>
              {t(el.label)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
