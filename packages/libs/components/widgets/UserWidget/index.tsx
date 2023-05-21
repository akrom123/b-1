import React, { FC } from 'react';
import classNames from 'classnames';
import { Manager, Popper, Reference } from 'react-popper';
import { PlayerLevel } from '../../../types/casino/levels';
import { UserImage } from '../../UserImage';
import { UserMenu } from '../UserMenu';
import { useFocusEvent } from '../../../hooks/useFocusEvent';
import { usePopperDropdown } from '../../../hooks/ui/usePopperDropdown';
// import { LevelBadge } from '../../LevelBadge';
// import { PopperArrow } from '../../PopperArrow';
import styles from './styles.module.scss';
import imgConfirmed from '../../../assets/img/profile/confirmed.svg';
import imgUnconfirmed from '../../../assets/img/profile/unconfirmed.svg';
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon';

export interface UserWidgetProps {
  level: PlayerLevel;
  name: string;
  progress: number;
  image: string;
  confirmed: boolean;
  onLogout: () => void;
  isMobile: boolean;
}

const UserWidget: FC<UserWidgetProps> = ({
  level,
  name,
  progress,
  image,
  confirmed,
  onLogout,
  isMobile = false
}) => {
  const confirmedIcon = confirmed ? imgConfirmed : imgUnconfirmed;
  const {
    focused, onBlur, onFocus,
  } = useFocusEvent();

  return (
    <div className={styles.wrap}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <button
              className={styles.widget}
              onFocus={onFocus}
              onBlur={onBlur}
              ref={ref}
              onClick={!focused ? onFocus : onBlur}
            >
              <div className={styles.profile}>

                <UserImage image={image} progress={progress} level={level} />

                {!isMobile && (
                  <div className={styles.info}>
                    <div className={styles.name}>

                      <span>{name}</span>
                      {/* <img src={confirmedIcon} alt="" /> */}
                    </div>
                    {/* <LevelBadge level={level} /> */}
                  </div>
                )}
              </div>
              <FontIcon name={FontIconName.IconArrowBottom} size="xxs" />
            </button>
          )}
        </Reference>

        {focused && (
          <Popper>
            {({
              ref, style,
            }) => (
              <div
                className={classNames(styles.popper, { [styles.hidden]: !focused })}
                ref={ref}
                style={style}
              >
                <UserMenu
                  confirmed={confirmed}
                  isMobile={isMobile}
                  name={name}
                  level={level}
                  progress={progress}
                  onLogout={onLogout}
                  image={image}
                />
              </div>
            )}
          </Popper>
        )}

      </Manager>
    </div>

  );
};

export { UserWidget };
