import React, { FC } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';
import { GameOverlay } from '@betnomi/libs/components/GameOverlay';

interface IProps {
    className?: string
    handlePlayGamxe?: () => void
}

const GameCard: FC<IProps> = ({ className, handlePlayGame }) => {

    return (
        <div className={cx(styles.gameCard, className)}>
            <img
            className={styles.gameCardImage}
             src="https://images.betnomi.com/8be03935-91dd-44f4-a47c-044d4f88af6c?auto=format&fit=max&w=3840&q=20"
              />
            <GameOverlay className={styles.gameCardOverlay} />
        </div>
    )
}

export { GameCard };