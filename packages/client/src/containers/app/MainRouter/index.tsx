import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '../../../constants/routes';
import { Homepage } from '../../../pages/Homepage';
import { ProfileWallet } from '../../../pages/ProfileWallet';
import { ProfileKYC } from '../../../pages/ProfileKYC';
import { Casino } from '../../../pages/Casino';
import { LiveCasino } from '../../../pages/LiveCasino';
import { NotFoundPage } from '../../../pages/NotFoundPage';
import { Promotions } from '../../../pages/Promotions';
import { PromotionSlug } from '../../../pages/PromotionSlug';
import { GameSlug } from '../../../pages/Game';

interface IProps { }

const MainRouter: FC<IProps> = () => (
  <Switch>
    <Route path={Routes.Homepage} component={Homepage} exact />
    <Route path={Routes.ProfileKYC} component={ProfileKYC} />
    <Route path={Routes.ProfileWallet} component={ProfileWallet} />
    <Route path={Routes.Casino} component={Casino} />
    <Route path={Routes.LiveCasino} component={LiveCasino} />
    <Route path={Routes.PromotionSlug} component={PromotionSlug} />
    <Route path={Routes.Promotions} component={Promotions} />
    <Route path={Routes.GamesSlug} component={GameSlug} />
    <Route component={NotFoundPage} />
  </Switch>
);

export { MainRouter };
