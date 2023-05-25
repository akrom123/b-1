import React, { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'
import classNames from 'classnames';
import useResizeObserver from '@betnomi/libs/hooks/useResizeObserver';
import { Button } from '@betnomi/libs/components';
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon';

export interface Banner {
  image: string,
  link: string
  title: string
  text: string
}

interface Props {
  banners: Banner[],
  isMenuActive: boolean

}

const BannerList: FC<Props> = ({
  banners,
  isMenuActive,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const breakpoints = {
    '(max-width: 639px)': {
      slides: {
        perView: 1,
      }
    },
    '(min-width: 640px) and (max-width: 1279px)': {
      slides: {
        perView: 2,
      }
    },
    '(min-width: 1280px)': {
      slides: {
        perView: 3,
      }
    },
  };
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      breakpoints,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
  )

  const onResize = useCallback((target: HTMLDivElement) => {
    instanceRef.current?.update()
  }, []);

  const wrapperRef = useResizeObserver(onResize);

  return <div className={styles.wrapper} ref={wrapperRef}>
    <div ref={sliderRef} className={classNames('keen-slider', styles.keenSlider)}>
      {banners.map((banner, index) => (
        <div key={index} className={classNames('keen-slider__slide', styles.slide)}>
          <div className={styles.bannerGameCard} >
            <img className={classNames(styles.banner)} src={banner.image} alt="banner" />
            <div className={styles.bannerGameCardOverlay}>
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: banner.title }}></h3>
                <h4 dangerouslySetInnerHTML={{ __html: banner.text }}></h4>
              </div>
              <Button size={'m'} className={styles.bannerGameCardButton}>
                <FontIcon name={FontIconName.Play} /> Play Now
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
    {loaded && instanceRef.current && (
      <div className={styles.dots}>
        {[
          ...Array(instanceRef.current.track.details.maxIdx + 1).keys(),
        ].map((idx) => {
          return (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx)
              }}
              className={classNames(styles.dot, (currentSlide === idx ? styles.dotActive : ""))}
            ></button>
          )
        })}
      </div>
    )}
  </div>
};

export default BannerList;
