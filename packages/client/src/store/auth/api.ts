import { CoinType } from '@betnomi/libs/types';
import { api } from '../../utils/api';
import { ApiPaths } from '../../utils/api/constants';
import {
  AuthAffiliateGetAccountsResponse,
  AuthLoginResponse,
  AuthMeResponse,
  AuthMyAffiliatesResponse,
  AuthRanksResponse,
  AuthRefreshResponse,
  AuthSignUpResponse,
} from './types';

export const authPostLogin = (
  email: string,
  password: string,
  device_id: string = '',
  device_name = '',
) =>
  api.post<AuthLoginResponse>(ApiPaths.AuthLogin, {
    email,
    password,
    device_id,
    device_name,
  });

let refresher: Promise<any> | undefined;

export const authRefresh = async (refresh: string, currency: CoinType) => {
  if (refresher) {
    return refresher;
  }
  
  refresher = api.post<AuthRefreshResponse>(
    ApiPaths.AuthRefresh,
    { play_currency: currency },
    {
      headers: { authorization: `Bearer ${refresh}` },
    },
  );

  const result = await refresher;
  refresher = undefined;
  return result;
};

export const authPostSignUp = (
  email: string,
  login: string,
  password: string,
  referralCode: string,
) =>
  api.post<AuthSignUpResponse>(ApiPaths.AuthSignUp, {
    email,
    password,
    login,
    referralCode,
  });

export const authGetMe = () => api.get<AuthMeResponse>(ApiPaths.AuthGetMe);

export const authGetRanks = () =>
  api.get<AuthRanksResponse>(ApiPaths.AuthGetRanks);

export const authGetMyAffiliates = () =>
  api.get<AuthMyAffiliatesResponse>(ApiPaths.AuthGetMyAffiliates);

export const authGetBalances = () =>
  api.get<AuthAffiliateGetAccountsResponse>(ApiPaths.AffiliateGetAccounts);

export const authCheckLoginExists = (login: string) =>
  api
    .post<AuthLoginResponse>(ApiPaths.CheckLoginExists, { login })
    .then(() => false)
    .catch(() => true);
