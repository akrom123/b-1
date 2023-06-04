import React, { FC, useState } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import { ProfileKYC as ProfileKYCContainer } from '../../containers/profile/kyc/ProfileKYC';
import { Routes } from '../../constants/routes';
import { Authorized } from '../../containers/app/Authorized';
import { useTranslation } from '@betnomi/libs/utils/i18n';

interface Props { }

const ProfileKYC: FC<Props> = () => {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    const mobile = window.matchMedia('(max-width: 1279px)').matches;
    setIsMobile(mobile);
  };
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const { t } = useTranslation('profile');

  return (
    <Authorized redirect={Routes.Homepage}>
      <MainLayout isMobile={isMobile}>
        <ProfileKYCContainer />
      </MainLayout>
    </Authorized>
  );
};

export { ProfileKYC };
