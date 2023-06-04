import createReducer from '@betnomi/libs/utils/createReducer';
import { CoinType } from '@betnomi/libs/types';
import { ProfileState } from '../../types/store/profile';
import { profileHandlers } from './handlers';
import { profileKYCBasicFormikValues } from '../../hooks/formik/useProfileKYCBasicForm';
import { emptyProfileFileState } from './constants';
import { KYCFileType } from './types';

export const profileInitialState: Readonly<ProfileState> = {
  basic: {
    isLoaded: false,
    ...profileKYCBasicFormikValues,
  },
  transactionAll: {
    isLoading: false,
    total: 0,
    list: undefined,
    toDate: new Date().getTime(),
    fromDate: new Date().getTime() - (24 * 60 * 60 * 1000),
  },
  withdraw: {
    isLoading: false,
    coin: CoinType.ethereum,
    amount: 0,
    fee: 0,
    address: '',
    email: '',
  },
  sportsBet: {
    isLoading: false,
    total: 0,
    list: undefined,
    toDate: new Date().getTime(),
    fromDate: new Date().getTime() - (24 * 60 * 60 * 1000),
  },
};

export default createReducer(profileInitialState, profileHandlers);
