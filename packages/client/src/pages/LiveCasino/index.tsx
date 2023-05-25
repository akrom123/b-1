import React, { FC, useCallback, useState } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { SearchPanel } from "../Casino/Content/SearchPanel";
import { LoadMore } from "../Casino/Content/LoadMore";
import { useTranslation } from "../../i18n";

import styles from './styles.module.scss';
import { GamesList } from '../Casino/Content/GamesList';
import classNames from 'classnames';
import { FontIconName } from '@betnomi/libs/components/FontIcon';

interface IProps { }

const LiveCasino: FC<IProps> = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { t } = useTranslation();

    const handleResize = () => {
        const isMobile = window.matchMedia("(max-width: 1279px)").matches;
        setIsMobile(isMobile)
    }
    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <MainLayout isMobile={isMobile}>
            <div className={styles.banners}>
                <div className={classNames(styles.bannersImage, styles.bannersDefault)}>
                    <img src="https://images.betnomi.com/6fced13b-69a2-4cd7-ba58-e2a134563a70?auto=format&fit=max&w=3840&q=50" />
                </div>
                <div className={classNames(styles.bannersImage, styles.bannersTablet)}>
                    <img src="https://images.betnomi.com/7be2c941-196d-4d28-8d2e-7ccbba374e51?auto=format&fit=max&w=1600&q=50" />
                </div>
                <div className={classNames(styles.bannersImage, styles.bannersMobile)}>
                    <img src="https://images.betnomi.com/2f4b42ff-fa3a-4163-ae84-b0404ea51a57?auto=format&fit=max&w=1024&q=50" />
                </div>
            </div>

            <SearchPanel
                chipsClassName={styles.liveCasino}
                chips={[
                    {
                        icon: FontIconName.All,
                        title: 'All',
                        className: styles.chipItem
                    },
                    {
                        icon: FontIconName.Blackjack,
                        title: 'BlackJack',
                        className: styles.chipItem
                    },
                    {
                        icon: FontIconName.Gameshow,
                        title: 'Game Show',
                        className: styles.chipItem
                    },
                    {
                        icon: FontIconName.Baccarat1,
                        title: 'Baccarat',
                        className: styles.chipItem
                    },
                ]}
            />

            <GamesList featured={false} />

            <LoadMore />
        </MainLayout>
    );
}

export { LiveCasino };