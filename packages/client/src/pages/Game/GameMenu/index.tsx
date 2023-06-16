import React, { FC, useState } from 'react';
import cx from 'classnames';
import { Toggle } from '@betnomi/libs/components/Toggle';
import { ModalType } from '../../../store/modal/types';
import { useModal } from '../../../hooks/useModal';
import { useUserUI } from '../../../hooks/useUserUI';

import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon';

interface IProps {
    handle: () => void
    handleActiveScreen: () => void
}

const GameMenu: FC<IProps> = ({ handle, handleActiveScreen }) => {
    const [realPlay, setRealPlay] = useState(true)
    const { showModal } = useModal();
    const {
        isChatActive, isMenuActive, setIsMenuActive, setIsChatActive,
    } = useUserUI();

    const toggleWithRates = () => {
        setRealPlay(!realPlay)
    }
    const handleClickTheatreView = () => {
        if (!isChatActive && !isMenuActive) {
            setIsChatActive(true)
            return
        }

        setIsMenuActive(false)
        setIsChatActive(false)
    }

    const handleFullScreen = () => {
        handle()
        handleActiveScreen()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.buttons}>
                <FontIcon name={FontIconName.Fullscreen} onClick={handleFullScreen} size={'m'} />
                <FontIcon name={FontIconName.Sizescreen} onClick={handleClickTheatreView} size={'m'} />
            </div>
            <div className={styles.toggle}>
                <Toggle
                    value={realPlay}
                    onChange={toggleWithRates}
                    preLabel='Fun Play'
                    label='Real Play'
                    preLabelClassName={styles.preLabel}
                    labelClassName={styles.label}
                    className={styles.toggle}
                />
            </div>
        </div>
    );
}

export default GameMenu;