import React, { useCallback } from 'react';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from "@betnomi/libs/components/FontIcon";
import { Routes } from "../../../constants/routes";
import { Link } from "@betnomi/libs/components";
import { useTranslation } from "../../../i18n";

type Props = {
    menuActive: boolean
    onMenuToggle: (val: boolean) => void;
    onChatToggle: (val: boolean) => void;
    chatActive: boolean;
};

export const MobileMenu: React.FC<Props> = ({ menuActive, onMenuToggle, chatActive, onChatToggle }) => {
    const { t } = useTranslation();
    const onChatClick = useCallback(() => onChatToggle(!chatActive), [
        chatActive,
        onChatToggle,
    ]);
    const onMenuClick = useCallback(() => onMenuToggle(!menuActive), [
        menuActive,
        onMenuToggle,
    ]);

    return (
        <div className={styles.menuWrap}>
            <ul className={styles.menu}>
                <li
                    className={styles.menu_toggle}
                    role="button"
                    tabIndex={-1}
                >
                    <Link to={Routes.Sports}>
                        <FontIcon name={FontIconName.Football} className={styles.icon} />
                        <span>{t('Sports')}</span>
                    </Link>
                </li>
                <li
                    className={styles.menu_toggle}
                    role="button"
                    tabIndex={-1}
                >
                    <Link to={Routes.Casino}>
                        <FontIcon name={FontIconName.Casino} className={styles.icon} />
                        <span>{t('Casino')}</span>
                    </Link>
                </li>
                <li
                    className={styles.menu_toggle}
                    role="button"
                    tabIndex={-1}
                >
                    <Link to={Routes.Games}>
                        <FontIcon name={FontIconName.House} className={styles.icon} />
                        <span>{t('Games')}</span>
                    </Link>
                </li>
                <li
                    className={styles.menu_toggle}
                    onClick={onChatClick}
                    role="button"
                    tabIndex={-1}
                >
                    <FontIcon name={FontIconName.Chat} className={styles.icon} />
                    <span>Chat</span>
                </li>
                <li
                    className={styles.menu_toggle}
                    onClick={onMenuClick}
                    role="button"
                    tabIndex={-1}
                >
                    <FontIcon name={FontIconName.MobileMenu} className={styles.icon} />
                    <span>Menu</span>
                </li>
            </ul>
        </div>
    );
}
