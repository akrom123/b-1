import React, { FC, useState } from 'react';

import { useTranslation } from "../../../../i18n";

import cx from "classnames";
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from "@betnomi/libs/components/FontIcon";
import { Select } from '@betnomi/libs/components/Select';

interface IProps {
    justify?: boolean;
}
interface Option {
    value: string;
    label: string;
    games?: number;
}

const SelectWrap: FC<IProps> = ({ justify = true }) => {
    const { t } = useTranslation();

    const optionsSportBetResult = [
        { label: 'All', games: 1112, value: 'All' },
        { label: 'Belatra', games: 12, value: 'Belatra' },
        { label: 'Betsoft', games: 312, value: 'Betsoft' },
        { label: 'BGaming', games: 112, value: 'BGaming' },
        { label: 'Blueprint', games: 32, value: 'Blueprint' },
        { label: 'Booongo', games: 32, value: 'Booongo' },
        { label: 'ELK Studios', games: 32, value: 'ELK Studios' },
        { label: 'Endorphina', games: 32, value: 'Endorphina' },
        { label: 'Evoplay', games: 32, value: 'Evoplay' },
        { label: 'GameArt', games: 32, value: 'GameArt' },
        { label: 'Endorphina1', games: 32, value: 'Endorphina1' },
        { label: 'Evoplay1', games: 32, value: 'Evoplay1' },
        { label: 'GameArt1', games: 32, value: 'GameArt1' },
    ];

    const [selectedProviders, setSelectedProviders]: any = useState({})

    const handleSelectedProviders = (elem: Option) => {
        const providers = { ...selectedProviders }
        if (elem.value === 'All') {
            setSelectedProviders({})
            return;
        }
        if (!providers[elem.value]) {
            providers[elem.value] = elem
        } else {
            delete providers[elem.value]
        }
        setSelectedProviders(providers);
    }

    return (
        <Select
            className={styles.providerSelect}
            listboxClassName={styles.providerSelectListbox}
            optionClassName={styles.providerSelectOption}
            popperClassName={styles.popper}
            justify={justify}
            // valueRenderer={() =>
            //     <span>
            //         <FontIcon name={FontIconName.Filter} className={styles.filterIcon} />
            //         <span className={styles.providerSelectButton}>
            //             <span className={styles.providerSelectLabel}>
            //                 Providers:
            //             </span> ({Object.keys(selectedProviders).length})
            //         </span>
            //     </span>
            // }
            placeholder={
                <span>
                    <FontIcon name={FontIconName.Filter} className={styles.filterIcon} />
                    <span className={styles.providerSelectButton}>
                        <span className={styles.providerSelectLabel}>
                            Providers:
                        </span> {
                            Object.keys(selectedProviders).length === 0 ?
                                'All' : Object.keys(selectedProviders).length === 1 ?
                                    Object.keys(selectedProviders)[0] :
                                    `(${Object.keys(selectedProviders).length})`
                        }
                    </span>
                </span>
            }
            optionRenderer={(item) =>
                <>
                    <FontIcon
                        name={FontIconName.Checked}
                        size={'xxs'}
                        className={cx(styles.checkIcon, {
                            [styles.checkIconActive]: item.value === 'All' ? !Object.keys(selectedProviders).length : selectedProviders[item.value]
                        })}
                    />
                    {item.label}
                    <span className={styles.gamesCount}>{item.games}</span>
                </>
            }
            variants={optionsSportBetResult}
            onChange={(item) => handleSelectedProviders(item)}
        ></Select>
    );
}

export { SelectWrap };