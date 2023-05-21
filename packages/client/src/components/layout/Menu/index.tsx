import React, { useCallback } from 'react';
import cx from 'classnames';
import { menuItems } from './constants';
import { MenuElement } from '../MenuElement';
import { LanguageSwitch } from '../LanguageSwitch';
import { ThemeSwitch } from '../ThemeSwitch';
import { FontIcon, FontIconName } from "@betnomi/libs/components/FontIcon";
import { Link } from "@betnomi/libs/components";
import { Routes } from "../../../constants/routes";
import { useTranslation } from "../../../i18n";

import styles from './styles.module.scss';
import logo from "@betnomi/libs/assets/img/new-logo.svg";
import home from "@betnomi/libs/assets/img/icons/home.svg";
import inplay from "@betnomi/libs/assets/img/icons/inplay.svg";
import sportBest from "@betnomi/libs/assets/img/icons/sportbets.svg";
import gamesgames from "@betnomi/libs/assets/img/icons/gamesgames.svg";

type Props = {
  menuActive: boolean;
  onMenuToggle?: (val: boolean) => void;
  isMobile?: boolean;
};

export const Menu: React.FC<Props> = ({ menuActive, onMenuToggle = () => { }, isMobile = false }) => {
  const { t } = useTranslation();
  const onMenuClick = useCallback(() => onMenuToggle(!menuActive), [
    menuActive,
    onMenuToggle,
  ]);

  return (
    <nav className={cx(
      styles.nav,
      { [styles.active]: menuActive },
    )}
    >
      <div className={styles.menuContent}>
        <div className={styles.menuHead}>
          Menu
          <FontIcon onClick={onMenuClick} name={FontIconName.Close} className={styles.menuClose} size={'s'} />
        </div>
        <div className={styles.menu}>
          <ul className={styles.scrollable}>
            {menuItems.map((el) => (
              <li key={el.options.label}>
                <MenuElement
                  el={el}
                  long={menuActive}
                  isMobile={isMobile}
                />
              </li>
            ))}
          </ul>
          {
            false && <div className={styles.buttons}>
              {/*<div className={styles.linear} />*/}
              <div className={styles.lang_out}>
                <LanguageSwitch long={menuActive} />
              </div>
              <div className={styles.theme_out}>
                <ThemeSwitch long={menuActive} />
              </div>
            </div>
          }

        </div>

      </div>
    </nav>
  );
}
