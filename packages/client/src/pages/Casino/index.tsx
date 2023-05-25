import React, { FC, useCallback, useState } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { Game } from "../../store/home/types";
import GameBanner from "@betnomi/libs/components/GameBanner";
import { SearchPanel } from "./Content/SearchPanel";
import { LoadMore } from "./Content/LoadMore";
import { useTranslation } from "../../i18n";

import styles from './styles.module.scss';
import { GamesList } from './Content/GamesList';
import BannerList from './Content/BannerList';
import { FontIconName } from '@betnomi/libs/components/FontIcon';

interface IProps { }

const BannersLocal = [
    {
        image: 'https://images.betnomi.com/e5982248-6ac5-4307-8816-61f972145e28?auto=format&fit=max&w=640&q=20',
        title: 'Book of 99',
        text: 'Win up to <strong>12,075x</strong> bet',
        link: ''
    },
    {
        image: 'https://images.betnomi.com/e5982248-6ac5-4307-8816-61f972145e28?auto=format&fit=max&w=640&q=20',
        title: 'Book of 99',
        text: 'Win up to <strong>12,075x</strong> bet',
        link: ''
    },
    {
        image: 'https://images.betnomi.com/e5982248-6ac5-4307-8816-61f972145e28?auto=format&fit=max&w=640&q=20',
        title: 'Book of 99',
        text: 'Win up to <strong>12,075x</strong> bet',
        link: ''
    },
    {
        image: 'https://images.betnomi.com/e5982248-6ac5-4307-8816-61f972145e28?auto=format&fit=max&w=640&q=20',
        title: 'Book of 99',
        text: 'Win up to <strong>12,075x</strong> bet',
        link: ''
    },
    {
        image: 'https://images.betnomi.com/e5982248-6ac5-4307-8816-61f972145e28?auto=format&fit=max&w=640&q=20',
        title: 'Book of 99',
        text: 'Win up to <strong>12,075x</strong> bet',
        link: ''
    },
    {
        image: 'https://images.betnomi.com/e5982248-6ac5-4307-8816-61f972145e28?auto=format&fit=max&w=640&q=20',
        title: 'Book of 99',
        text: 'Win up to <strong>12,075x</strong> bet',
        link: ''
    },
]


const Casino: FC<IProps> = () => {
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
                <BannerList banners={BannersLocal} isMenuActive={false} />
            </div>

            <SearchPanel chips={[
                {
                    icon: FontIconName.All,
                    title: 'All',
                    className: styles.chipItem
                },
                {
                    icon: FontIconName.New,
                    title: 'New',
                    className: styles.chipItem
                },
                {
                    icon: FontIconName.Popular,
                    title: 'Popular',
                    className: styles.chipItem
                },
                {
                    icon: FontIconName.Bonus,
                    title: 'Bonus Buy',
                    className: styles.chipItem
                },
            ]} />

            <GamesList featured={true} />

            <LoadMore />
        </MainLayout>
    );
}

export { Casino };