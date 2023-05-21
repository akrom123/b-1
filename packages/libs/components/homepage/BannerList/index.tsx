import React, { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'
import classNames from 'classnames';
import useResizeObserver from '@betnomi/libs/hooks/useResizeObserver';

export interface Banner {
  imageDefault: string,
  imageTablet: string,
  imageMobile: string,
  link: string
  title?: string
  text?: string
  textColor?: string
}

interface Props {
  banners: Banner[],
  isMenuActive: boolean,
  overlay?: any,

}

const BannerList: FC<Props> = ({
  banners,
  overlay,
  isMenuActive,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
    ]
  )

  const onResize = useCallback((target: HTMLDivElement) => {
    instanceRef.current?.update()
  }, []);

  const wrapperRef = useResizeObserver(onResize);

  return <div className={styles.wrapper} ref={wrapperRef}>
    <div ref={sliderRef} className={classNames('keen-slider', styles.keenSlider)}>
      {banners.map((banner, index) => (
        <div key={index} className={classNames('keen-slider__slide', styles.slide)}>
          <img className={classNames(styles.banner, styles.bannerDefault)} src={banner.imageDefault} alt="banner" />
          <img className={classNames(styles.banner, styles.bannerTablet)} src={banner.imageTablet} alt="banner" />
          <img className={classNames(styles.banner, styles.bannerMobile)} src={banner.imageMobile} alt="banner" />
          {overlay(banner)}
        </div>
      ))}
    </div>
    {loaded && instanceRef.current && (
      <div className={styles.dots}>
        {[
          ...Array(instanceRef.current.track.details.slides.length).keys(),
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
