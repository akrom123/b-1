import React, { FC, useCallback, useState } from 'react';
import styles from './styles.module.scss';
import { ButtonColor, } from '@betnomi/libs/types';
import { Button } from '@betnomi/libs/components';

interface IProps { }

const LoadMore: FC<IProps> = () => {
    return (
        <div className={styles.loadMore}>
            <div className={styles.progressbar}>
                <span style={{ width: "30%" }}>{''}</span>
            </div>
            <p className={styles.displaying}>Displaying
                <span className={styles.whiteText}> 12 </span>
                of
                <span className={styles.greenText}> 8000 </span>
                games
            </p>
            <Button className={styles.button} size={'m'} color={ButtonColor.Secondary}>Load More</Button>
        </div>
    );
}

export { LoadMore };