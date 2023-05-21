import React, { FC, useCallback } from 'react';
import Button from '@betnomi/libs/components/Button';
import { ButtonColor } from '@betnomi/libs/types';
import { FontIconName } from '@betnomi/libs/components/FontIcon';
import { useTranslation } from '../../../i18n';
import { HeaderToggleButton } from '../HeaderToggleButton';
import styles from './styles.module.scss';

interface IProps {
  onChatToggle: (val: boolean) => void;
  active: boolean;
  onOpenSignInModal: () => void;
  onOpenSignUpModal: () => void;
  isMobile?: boolean;
  isSmallDesktop?: boolean;
  onMenuToggle?: (val: boolean) => void;
  menuActive?: boolean;
}

const HeaderGuest: FC<IProps> = ({
  active, onChatToggle, onOpenSignInModal, onOpenSignUpModal, isMobile = false, isSmallDesktop, onMenuToggle, menuActive
}) => {
  const { t } = useTranslation();
  const onClick = useCallback(() => onChatToggle(!active), [
    active,
    onChatToggle,
  ]);
  const onClickSmallDesktop = useCallback(() => {
    if (menuActive) {
      // @ts-ignore
      onMenuToggle(!menuActive)
    }
    onChatToggle(!active)

    //  onMenuToggle(!menuActive)
    // onChatToggle(!active)
  }, [
    active,
    onChatToggle,
  ]);

  return (
    <div className={styles.buttons}>
      {!isMobile && (
        <HeaderToggleButton
          active={active}
          onClick={onClick}
          icon={FontIconName.Chat}
          className={styles.chatButton}
        />
      )}

      <Button
        color={ButtonColor.Secondary}
        onClick={onOpenSignInModal}
        className={styles.button}
      >
        {t('Sign in')}
      </Button>
      <Button
        color={ButtonColor.Primary}
        onClick={onOpenSignUpModal}
        className={styles.button}
      >
        {t('Sign up')}
      </Button>
    </div>
  );
};

export { HeaderGuest };
