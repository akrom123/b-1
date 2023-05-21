import React, { FC, PropsWithChildren, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css'
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react'
import { gameNames, GameType } from '../../../types/ui/games';
import H4 from '../../H4';
import styles from './styles.module.scss';
import { GameOverlay } from "@betnomi/libs/components/GameOverlay";
import useResizeObserver from '@betnomi/libs/hooks/useResizeObserver';
import classNames from 'classnames';
import Button from '@betnomi/libs/components/Button';
import { ButtonColor } from '@betnomi/libs/types';


export type Breakpoints = Omit<KeenSliderOptions<any, any, any>, 'breakpoints'>;
interface Props {
  games: JSX.Element[]
  gameType: GameType
  breakpoints: Breakpoints
  top?: Boolean,
  buttons?: JSX.Element
  action?: {
    text: string,
    handler: () => void
  }
}

const GameList: FC<PropsWithChildren<Props>> = ({
  games,
  gameType,
  breakpoints,
  top = false,
  buttons,
  action
}) => {

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      breakpoints,
    },
    [
      // add plugins here
    ]
  )

  useLayoutEffect(() => {
    instanceRef.current?.update()
  }, [games])

  const onResize = () => {
    console.log(gameNames[gameType], breakpoints, instanceRef)
    instanceRef.current?.update()
  };

  const wrapperRef = useResizeObserver<HTMLDivElement>(onResize);

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.gamesTop]: top
      })}
      ref={wrapperRef}
    >
      <div className={styles.header}>
        <div className={styles.title} dangerouslySetInnerHTML={{ __html: gameNames[gameType] }}>
        </div>
        {
          (buttons || action) &&
          <div className={styles.buttons}>
            {buttons}
            {
              action &&
              <Button
                color={ButtonColor.Tertiary}
                size={'m'}
                onClick={(action.handler)}
                className={styles.allLink}
              >{action.text}</Button>
            }
          </div>
        }
      </div>
      <div ref={sliderRef} className="keen-slider">
        {games.map((game, idx) => (
          <div className="keen-slider__slide" key={idx}>
            {gameType == 'Promotions' ? game : (
              <div className={styles.gameListItem}>
                {game}
                {gameType !== 'GameProviders' && <GameOverlay className={styles.overlay} />}
              </div>
            )
            }
          </div>
        ))}
      </div>

    </div>
  );
};

export default GameList;
