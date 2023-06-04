import React, { FC, useEffect } from 'react';
import { Tabs } from '@betnomi/libs/components/tabs/Tabs';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TabbedContent } from '../../../../components/common/TabbedContent';
import { useTabOrder } from '../../../../hooks/useTabOrder';
import ProfileKYCBasic from '../ProfileKYCBasic';
import { Routes } from '../../../../constants/routes';
import styles from './styles.module.scss';
import { profileGetBasic } from '../../../../store/profile/actionCreators';

enum Tab {
  Basic = 'basic',
}

const tabOrder = [Tab.Basic];

interface Props {
}

const ProfileKYC: FC<Props> = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation('profile');
  const { params: { tab } } = useRouteMatch<{ tab: Tab }>();
  const { active, onTabChange } = useTabOrder(tabOrder, tab, `${Routes.ProfileRoot}/kyc`);

  useEffect(() => {
    dispatch(profileGetBasic());
  }, []);

  return (
    <Tabs active={active} onChange={onTabChange} controlled>
      <TabbedContent>
        <TabbedContent.Tabs>
          <Tabs.Head>
            <span>{t('Basic')}</span>
          </Tabs.Head>
        </TabbedContent.Tabs>

        <TabbedContent.Content>
          <Tabs.Content>
            <div className={styles.basic_wrapper}>
              <ProfileKYCBasic />
            </div>
          </Tabs.Content>
        </TabbedContent.Content>
      </TabbedContent>
    </Tabs>
  );
};

export { ProfileKYC };
