import { PlayerLevel } from '@betnomi/libs/types/casino/levels';
import { CoinType } from '@betnomi/libs/types';

export interface AuthState {
  access: string;
  refresh: string;
  game: string;
  currency: CoinType;
  ui: {
    isChatActive: boolean;
    isMenuActive: boolean;
  }
  login: {
    error: string;
    isLoading: boolean;
  };
  signUp: {
    error: string;
    isLoading: boolean;
  };
  user: {
    name: string;
    level: PlayerLevel;
    progress: number;
    image: string;
    confirmed: boolean;
    balances: Partial<Record<CoinType, number>>;
    id: number;
  };
  ranks: {
    list: Record<PlayerLevel, AffiliateRank> | undefined;
    my: AffiliateStatus;
  };
  viewInUSD: boolean,
}

export interface AffiliateRank {
  id: number;
  level: number;
  wager: number;
  name: PlayerLevel;
  reward: number;
  cashback_bonus: {
    percentage: 0;
    duration: string;
    expiration: string;
    wager_requirement: 0;
    minimum_loss: string;
    maximim_loss: string;
  };
}

export interface AffiliateStatus {
  userId: number;
  rankId: number;
  rankGivenAt: number;
  affiliatePlanId: number;
  affiliatePlanAssignedAt: number;
  affiliatePlanAssignedBy: number;
  referrerId: number;
  totalBet: number;
  createdAt: number;
  updatedAt: number;
}

export type SignUpErrorReponse = {
  code: number,
  message: string, 
  details: unknown[]
};

export type SignInErrorReponse = {
  code: number,
  message: string, 
  details: unknown[]
};

type FieldKey = 'username' | 'password' | 'email';

export type AuthErrorTransformResult = {
  message: string;
  fields: { [key in FieldKey]?: string };
};