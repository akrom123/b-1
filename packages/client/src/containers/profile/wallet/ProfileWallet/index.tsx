import React, { FC } from 'react';
import { Tabs } from '@betnomi/libs/components/tabs/Tabs';
import { useRouteMatch } from 'react-router-dom';
import { useTranslation } from '../../../../i18n';
import { TabbedContent } from '../../../../components/common/TabbedContent';
import { useTabOrder } from '../../../../hooks/useTabOrder';
import { Routes } from '../../../../constants/routes';
import { ProfileWalletDeposit } from '../ProfileWalletDeposit';
import { ProfileWalletWithdraw } from '../ProfileWalletWithdraw';

enum Tab {
  Deposit = 'deposit',
  Withdraw = 'withdraw',
}

const tabOrder = [Tab.Deposit, Tab.Withdraw];

interface Props {
  isMobile: boolean;
}

const ProfileWallet: FC<Props> = ({ isMobile = false }) => {
  const { t } = useTranslation('profile');
  const { params: { tab } } = useRouteMatch<{ tab: Tab }>();
  const { active, onTabChange } = useTabOrder(tabOrder, tab, `${Routes.ProfileRoot}/wallet`);

  return (
    <Tabs active={active} onChange={onTabChange} controlled>
      <TabbedContent>
        <TabbedContent.Tabs>
          {isMobile && (
            <Tabs.Head>
              <span>{t('Deposit')}</span>
              <span>{t('Withdraw')}</span>
            </Tabs.Head>
          )}
          {!isMobile && (
            <Tabs.Head>
              <span>{t('Deposit')}</span>
              <span>{t('Withdraw')}</span>
            </Tabs.Head>
          )}
        </TabbedContent.Tabs>

        <TabbedContent.Content>
          <Tabs.Content>
            <ProfileWalletDeposit />
            <ProfileWalletWithdraw />
          </Tabs.Content>
        </TabbedContent.Content>
      </TabbedContent>
    </Tabs>
  );
};

export { ProfileWallet };
