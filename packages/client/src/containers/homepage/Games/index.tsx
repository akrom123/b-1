import React, { FC, useCallback, useEffect } from 'react';
import BannerList, { Banner } from '@betnomi/libs/components/homepage/BannerList';
import GameList, { Breakpoints } from '@betnomi/libs/components/homepage/GameList';
import { GameType } from '@betnomi/libs/types/ui/games';
import GameCategoriesList from '@betnomi/libs/components/homepage/GameCategoriesList';
import { useCategories } from '@betnomi/libs/hooks/useCategories';
import { useDispatch } from 'react-redux';
import GameBanner from '@betnomi/libs/components/GameBanner';
import Skeleton from '@betnomi/libs/components/Skeleton';
import styles from './styles.module.scss';
import { homeGetGames } from '../../../store/home/actionCreators';
import { Game } from '../../../store/home/types';
import { useShallowSelector } from '../../../hooks';
import { selectHomeGames } from '../../../store/home/selectors';
import { selectAuthUI } from '../../../store/auth/selectors';
import { bannerHomeOverlay } from '@betnomi/client/src/components/common/BannerOverlays';
import GameProvider from '@betnomi/libs/components/homepage/GamesProvider'
import { Promotions } from '@betnomi/libs/components/Promotions';
import Round1 from '@betnomi/libs/assets/img/promotions/Round1.png';
import BackgroundImage from '@betnomi/libs/assets/img/promotions/background1.png';
import Round2 from '@betnomi/libs/assets/img/promotions/Round2.png';
import { useUserUI } from 'hooks/useUserUI';
import { Chips } from '@betnomi/libs/components/Chips';
import { FontIconName } from '@betnomi/libs/components/FontIcon';
import { gameShow } from '../../../store/game/actionCreators';
import { useHistory } from 'react-router-dom';


interface IProps {
  isMobile: boolean
}
interface ILocalGame {
  type: boolean
  title: string,
  para: string,
  round: string | null
}
// Test
export const getBanners = () => {
  const banners: Banner[] = [
    {
      imageDefault: 'https://images.betnomi.com/dda001a2-b9fb-45e2-8637-1f4fe5bc2f0d?auto=format&fit=max&w=3840&q=80',
      imageTablet: 'https://images.betnomi.com/331711da-3e4d-4a71-901d-8b5010bb0060?auto=format&fit=max&w=1600&q=60',
      imageMobile: 'https://images.betnomi.com/63838a82-6a97-49e1-b6e0-0d57fa554529?auto=format&fit=max&w=768&q=60',
      link: '#',
      title: 'Welcome Bonus<br>Get up to 325%',
      text: 'Start your winning with Betnomi',
      textColor: '#A9FF9F'
    },
    {
      imageDefault: 'https://images.betnomi.com/dda001a2-b9fb-45e2-8637-1f4fe5bc2f0d?auto=format&fit=max&w=3840&q=80',
      imageTablet: 'https://images.betnomi.com/331711da-3e4d-4a71-901d-8b5010bb0060?auto=format&fit=max&w=1600&q=60',
      imageMobile: 'https://images.betnomi.com/63838a82-6a97-49e1-b6e0-0d57fa554529?auto=format&fit=max&w=768&q=60',
      link: '#',
      title: 'Welcome Bonus<br>Get up to 325%',
      text: 'Start your winning with Betnomi',
      textColor: '#A9FF9F'
    },
  ];

  return banners;
};

const PromotionLocal = [
  {
    type: false,
    bgImage: BackgroundImage,
    round: Round1,
    title: 'Twin Welcome Pack',
    para: 'Get up to 325%<br>Start your winning with Betnomi'
  },
  {
    type: true,
    round: null,
    title: 'Summer of Love',
    para: 'Get up to 325%<br>Start your winning with Betnomi'
  },
  {
    type: false,
    round: Round2,
    title: 'Twin Welcome Pack',
    para: 'Get up to 325%<br>Start your winning with Betnomi'
  },
  {
    type: true,
    round: null,
    bgColor: '#63A5F1',
    title: 'Summer of Love',
    para: 'Trigger a share of 0.100000 bitcoin with any bet in selected slots.'
  },
  {
    type: false,
    round: Round2,
    bgColor: '#3EBBA9',
    title: 'Twin Welcome Pack',
    para: 'Get up to 100 free spins in Book of Dead'
  },
  {
    type: true,
    round: null,
    title: 'Summer of Love',
    para: 'Trigger a share of 0.100000 bitcoin with any bet in selected slots.'
  },
]

export const generatePlaceholders = (width?: number, height?: number) => (
  [...new Array(10)]
    // eslint-disable-next-line react/no-array-index-key
    .map((_, i) => <Skeleton height={height} width={width} key={i} />)
);

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

const liveCasinoBreakpoints: Breakpoints = {
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

export const gameProvidersBreakpoints: Breakpoints = {

  '(max-width: 479px)': {
    slides: {
      perView: 4,
      spacing: 10,
    }
  },
  '(min-width: 480px) and (max-width: 639px)': {
    slides: {
      perView: 5,
      spacing: 16
    }
  },
  '(min-width: 640px) and (max-width: 767px)': {
    slides: {
      perView: 6,
      spacing: 12
    }
  },
  '(min-width: 768px) and (max-width: 1279px)': {
    slides: {
      perView: 9,
      spacing: 12
    }
  },
  '(min-width: 1280px) and (max-width: 2180px)': {
    slides: {
      perView: 9,
      spacing: 12
    }
  },
};

const promotionsBreakpoints: Breakpoints = {
  '(min-width: 1280px)': {
    slides: {
      perView: 3,
      spacing: 14
    }
  },
};

const Games: FC<IProps> = ({ isMobile }) => {
  const dispatch = useDispatch();
  const { push } = useHistory()
  const {
    gameProviders, isLoading,
  } = useShallowSelector(selectHomeGames);
  const categories = useCategories();
  const { isChatActive } = useShallowSelector(selectAuthUI);

  const smScreen = window.matchMedia('(max-width:639px)').matches;
  const openDrawer = useCallback(
    () => {
      smScreen ? dispatch(gameShow()) : push('/game/123')
    },
    [],
  );

  useEffect(() => {
    dispatch(homeGetGames());
  }, []);
  const getGames = useCallback((
    gameList: Game[], imgSizes = {},
  ) => gameList.map((game) => {
    return (
      <GameBanner
        name={game.name}
        image={game.icon_3 || game.icon_2}
        key={game.id}
        width={imgSizes.width}
        height={imgSizes.height}
        imageClassname={styles.banner}
        game={game}
      />
    )
  }), []);

  // 
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
  const liveCasino = Array(15).fill({
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

  const getPromotions = useCallback((
    gameList: ILocalGame[], imgSizes = {},
  ) => PromotionLocal.map((game) => {
    return (
      <Promotions
        type={game.type}
        round={game.round}
        title={game.title}
        para={game.para}
      />
    )
  }), []);

  const midScreen = window.matchMedia('(min-width:1280px)').matches;

  const gameImgSizes = {
    slots: {
      width: 256,
      height: 356
    },
    liveCasino: {
      width: 256,
      height: 356
    },
    gameProviders: {
      width: 145,
      height: 75,
    },
    promotions: {
      width: 320,
      height: 170
    },
  };


  const {
    isMenuActive,
  } = useUserUI();


  return (
    <>
      <div className={styles.banners}>
        <BannerList overlay={bannerHomeOverlay} isMenuActive={isMenuActive} banners={getBanners()} />
      </div>
      {/* <div className={styles.categories}>
        <GameCategoriesList spaceBetween={isMobile ? 8 : smallScreen ? 22 : 12 } categories={categories} />
      </div> */}
      <div className={styles.games}>
        <GameList
          onClick={openDrawer}
          games={isLoading ? generatePlaceholders(168, 220) : getGames(slots, gameImgSizes.slots)}
          gameType={GameType.Slots}
          breakpoints={slotsBreakpoints}
          top
          buttons={<>
            <Chips items={[
              {
                icon: FontIconName.Popular,
                title: 'Popular'
              },
              {
                icon: FontIconName.Bonus,
                title: 'Bonus Buy'
              },
            ]} />
          </>}

          action={{
            text: 'See All',
            handler: () => { }
          }}
        />
        <GameList
          onClick={openDrawer}
          games={isLoading ? generatePlaceholders(350, 220) : getGames(liveCasino, gameImgSizes.liveCasino)}
          gameType={GameType.LiveCasino}
          breakpoints={liveCasinoBreakpoints}
          buttons={<>
            <Chips items={[
              {
                icon: FontIconName.All,
                title: 'All',
                className: styles.tag,
              },
              {
                icon: FontIconName.Poker,
                title: 'Poker',
                className: styles.tag,
              },
              {
                icon: FontIconName.Baccarat1,
                title: 'Baccarat',
                className: styles.tag,
              },
              {
                icon: FontIconName.Blackjack,
                title: 'BlackJack',
                className: styles.tag,
              },
            ]} />
          </>}

          action={{
            text: 'See All',
            handler: () => { }
          }}
        />
        <div className={styles.gameProvider}>
          <GameProvider />
        </div>
        <GameList
          games={isLoading ? generatePlaceholders(130, 80) : getGames(gameProviders, gameImgSizes.gameProviders)}
          gameType={GameType.GameProviders}
          breakpoints={gameProvidersBreakpoints}
        />
        {
          midScreen ?
            <GameList
              games={isLoading ? generatePlaceholders(350, 220) : getPromotions(PromotionLocal, gameImgSizes.promotions)}
              gameType={GameType.Promotions}
              breakpoints={promotionsBreakpoints}
            /> : null
        }
      </div>
    </>
  );
};
export default Games;