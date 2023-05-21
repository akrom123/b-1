import React, { FC, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Tabs } from '@betnomi/libs/components/tabs/Tabs';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon';
import { Table } from '@betnomi/libs/components/Table';
import { data, columns, columnsMobile, columnsS, columnsXS } from './betsTableInformation';
import { Chips } from '@betnomi/libs/components/Chips';
import Button from '@betnomi/libs/components/Button';
import { ButtonColor } from '@betnomi/libs/types';
import classNames from 'classnames';

const GameProvider = () => {
  const [showMore, setShowMore] = useState(false)
  const [size, setSize] = useState<'m' | 's' | 'xs'>('m');
  const handleResize = () => {
    switch (true) {
      case (window.matchMedia("(min-width: 1280px)").matches):
        setSize('m');
        break
      case (window.matchMedia("(min-width: 640px) and (max-width: 1279px)").matches):
        setSize('s');
        break
      case (window.matchMedia("(max-width: 1279px)").matches):
        setSize('xs');
        break
    }
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return (
    <div className={styles.tablesWrapper}>
      <div className={styles.tablesHeader}>
        <Chips items={[
          {
            icon: FontIconName.Trophy,
            title: 'Latest Bets'
          },
        ]} />
        <div className={styles.buttonWrapper}>
          <Button color={ButtonColor.Tertiary} onClick={() => setShowMore(!showMore)} className={styles.tablesButton}>
            <span>
              {
                showMore ? 'Show More' : 'Show Less'
              }
            </span>
            <FontIcon name={FontIconName.ArrowRight} className={classNames(styles.tableArrow, {
              [styles.tablesExpanded]: !showMore
            })} />
          </Button>
        </div>
      </div>
      <Table data={!showMore ? data : data.slice(0, 5)} columns={
        size === 'm' ? columns :
          size === 's' ? columnsS :
            size === 'xs' ? columnsXS : []
      } className={styles.table} />
    </div>
  )
}

export default GameProvider;