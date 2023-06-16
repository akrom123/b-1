import React, { FC, useCallback, useEffect, useState } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import GameList, { Breakpoints } from '@betnomi/libs/components/homepage/GameList';
import { GameType } from '@betnomi/libs/types/ui/games';
import { gameProvidersBreakpoints, generatePlaceholders } from '../../containers/homepage/Games';
import { selectHomeGames } from '../../store/home/selectors';
import { Game } from '../../store/home/types';
import GameBanner from '@betnomi/libs/components/GameBanner';
import { selectAuthUI } from '../../store/auth/selectors';
import GameProvider from '@betnomi/libs/components/homepage/GamesProvider';
import GameView from './GameView';
import GameBottomMenu from './GameMenu';

import { useShallowSelector } from '../../hooks';
import { useTranslation } from '../../i18n';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { gameShow } from '../../store/game/actionCreators';

import {
  useParams,
} from 'react-router-dom';

import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';

interface IProps {
}

const GameSlug: FC<IProps> = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { gameProviders, isLoading, ...allGames } = useShallowSelector(selectHomeGames);

  const dispatch = useDispatch();
  const { isChatActive } = useShallowSelector(selectAuthUI);
  const { t } = useTranslation();
  let { id: gameId } = useParams();


  const slotsBreakpoints: Breakpoints = {
    '(max-width: 479px)': {
      slides: {
        perView: 3,
        spacing: 14
      }
    },
    '(min-width: 480px) and (max-width: 639px)': {
      slides: {
        perView: 5,
        spacing: 16
      }
    },
    '(min-width: 640px)': {
      slides: {
        perView: 6,
        spacing: 14
      }
    },
  };


  const [activeGame, setActiveGame]: any = useState(null);

  const gameImgSizes = {
    slots: {
      width: 256,
      height: 356
    },
  };

  const slots = Array(15).fill({
    icon_3: 'https://images.betnomi.com/37697206-322b-4a14-9ce8-e6b502e54a36?auto=format&fit=max&w=3840&q=20',
    background: '',
    blocked_currencies: [],
    categories: [],
    description: 'string',
    front_game_id: '',
    icon_2: '',
    id: '',
    name: '',
  })

  useEffect(() => {
    let game: any;

    Object.keys(allGames).forEach(item => {
      // @ts-ignore
      if (allGames[item].length > 0 && !game) {
        // @ts-ignore
        game = allGames[item].find(elem => elem.id === gameId);
      }
    });

    setActiveGame(game);
  }, []);


  const handleResize = () => {
    const isMobile = window.matchMedia('(max-width: 1279px)').matches;
    setIsMobile(isMobile);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getGames = useCallback((
    gameList: Game[], imgSizes = {},
  ) => gameList.map((game) => (
    <GameBanner
      name={game.name}
      image={game.icon_3 || game.icon_2}
      key={game.id}
      width={imgSizes.width}
      height={imgSizes.height}
      imageClassname={styles.banner}
      game={game}
    />
  )), []);


  const smScreen = window.matchMedia('(max-width:639px)').matches;
  const openDrawer = useCallback(
    () => smScreen && dispatch(gameShow()),
    [],
  );

  const [activeScreen, setActiveScreen]: any = useState(false);
  const handleActiveScreen = () => {
    setActiveScreen(!activeScreen);
  };

  const gameFullScreen = useFullScreenHandle();

  const reportChange = useCallback((state, handle) => {
    if (handle === gameFullScreen) {
      if (!state) {
        setActiveScreen(false);
      }
    }
  }, [gameFullScreen]);

  return (
    <MainLayout isMobile={isMobile}>
      <div className={styles.wrapper}>
        <FullScreen handle={gameFullScreen} onChange={reportChange} className={styles.fullScreen}>
          <GameView activeScreen={activeScreen} game={activeGame} />
        </FullScreen>
        <GameBottomMenu handleActiveScreen={handleActiveScreen} handle={gameFullScreen.enter} />
      </div>

      <div className={styles.list}>
        <GameList
          onClick={openDrawer}
          games={isLoading ? generatePlaceholders(168, 220) : getGames(slots, gameImgSizes.slots)}
          gameType={GameType.RecommendedGames}
          breakpoints={slotsBreakpoints}
          top
        />
      </div>
    </MainLayout>
  );
};

export { GameSlug };