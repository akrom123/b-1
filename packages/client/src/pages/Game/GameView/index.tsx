import React, { FC, useCallback, useEffect, useState } from 'react';

import styles from './styles.module.scss';
import { Button } from '@betnomi/libs/components';
import { useTranslation } from '../../../i18n';
import cx from 'classnames';
import playIcon from '@betnomi/libs/assets/img/icons/play.svg';
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon';


interface IProps {
  game: any
  activeScreen: boolean
}

const GameView: FC<IProps> = ({ game, activeScreen }) => {
  const { t } = useTranslation();
  game = {
    background: 'https://images.betnomi.com/bb79a22e-6f37-4983-a10c-7e3dc184516a?auto=format&fit=max&w=3840&q=5',
    url: 'https://demogamesfree.pragmaticplay.net/gs2c/html5Game.do?extGame=1&symbol=vs20kraken2&gname=Release%20the%20Kraken%202&jurisdictionID=99&lobbyUrl=https%3A%2F%2Fgames.betnomi.com%2FGoToHome%3FId%3D&mgckey=stylename@generic~SESSION@3ff6328a-2ca1-4fdc-b857-3439f0eecfb2'
  }
  const [play, setPlay] = useState(false)
  const handlePlay = () => {
    setPlay(true)
  }
  return (
    <div className={cx({ [styles.activeScreen]: activeScreen }, styles.wrapper)}>
      {
        !play ?
          <>
            {game?.background ? <img className={styles.bgrImage} src={game.background} alt='' /> : <div className={styles.cap}>{''}</div>}
            <div className={styles.overlay}>
              <Button className={styles.button} onClick={handlePlay}>
                <FontIcon name={FontIconName.PlaySecondary} />
                <span>{t('Play now')}</span>
              </Button>
              <Button color={'gray'} className={styles.button} onClick={handlePlay}>
                <FontIcon name={FontIconName.PlaySecondary} />
                <span>{t('Fun Play')}</span>
              </Button>
            </div>
          </> : <iframe className={styles.iframe} src={game.url} allowFullScreen />
      }
    </div >
  );
}

export default GameView;