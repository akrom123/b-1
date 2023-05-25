import React, { FC, useState } from 'react';
import { useTranslation } from "i18n";
import styles from './styles.module.scss';
import { SelectWrap } from "../Select";
import { Chips } from '@betnomi/libs/components/Chips';
import { FontIconName } from '@betnomi/libs/components/FontIcon';
import { SearchInput } from '../SearchInput';
import { ChipsProps } from '@betnomi/libs/components/Chips';
import { LiveCasino } from 'pages/LiveCasino';

interface IProps {
    chips: ChipsProps['items']
    chipsClassName?: string
}

const SearchPanel: FC<IProps> = ({ chips, chipsClassName }) => {
    const { t } = useTranslation();

    const [isMobile, setIsMobile] = useState(false);
    const handleResize = () => {
        const isMobile = window.matchMedia("(max-width: 639px)").matches;
        setIsMobile(isMobile)
    }

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [])


    return (
        <div className={styles.searchPanel}>
            <div className={styles.chipsWrapper}>
                <Chips items={chips} className={chipsClassName} />
            </div>
            <div className={styles.container}>

                <SearchInput justify={!isMobile} />

                <SelectWrap justify={!isMobile} />
            </div>
        </div>
    );
}

export { SearchPanel }; 