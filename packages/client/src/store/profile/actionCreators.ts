import { SportsBetFormikValues } from '../../hooks/formik/useSportsBetFormik';
import { TransactionAllFormikValues } from '../../hooks/formik/useTransactionAllForm';
import { ProfileKYCBasicFormikValues } from '../../hooks/formik/useProfileKYCBasicForm';
import { ProfileActionTypes } from './actionTypes';
import { ProfileKYCBasicError, ProfileState } from '../../types/store/profile';
import { ProfileWithdrawFormikValues } from '../../hooks/formik/useProfileWithdrawFormik';
import { KYCFileType, WithdrawErrorTransformResult } from './types';

export const profileGetBasic = () => ({
  type: ProfileActionTypes.GetBasic,
});

export const profileSubmitBasic = (
  payload: ProfileKYCBasicFormikValues,
  callback: (e?: ProfileKYCBasicError) => void,
) => ({
  type: ProfileActionTypes.SubmitBasic,
  payload: { values: payload, callback },
});

export const profileSetBasic = (payload: Partial<ProfileState['basic']>) => ({
  type: ProfileActionTypes.SetBasic,
  payload,
});

export const profileWithdraw = (
  payload: ProfileWithdrawFormikValues & { fee: number },
  callback: (e?: string) => void,
) => ({
  type: ProfileActionTypes.Withdraw,
  payload,
  callback,
});

export const profileWithdrawRequestCode = (
) => ({
  type: ProfileActionTypes.WithdrawRequestCode,
});

export const profileDropKYCFile = (fileType: KYCFileType) => ({
  type: ProfileActionTypes.DropKYCFile,
  payload: { fileType },
});

export const profileSetTransactionAll = (
  payload: Partial<ProfileState['transactionAll']>,
) => ({
  type: ProfileActionTypes.SetTransactionAll,
  payload,
});

export const profileGetTransactionAll = (payload: TransactionAllFormikValues) => ({
  type: ProfileActionTypes.GetTransactionAll,
  payload,
});

export const profileSetWithdraw = (
  payload: Partial<ProfileState['withdraw']>,
) => ({
  type: ProfileActionTypes.SetWithdraw,
  payload,
});

export const profileWithdrawConfirm = (payload: {
  googleCode: string;
  emailCode: string;
}, callback: (e?: WithdrawErrorTransformResult) => void) => ({
  type: ProfileActionTypes.WithdrawConfirm,
  payload,
  callback,
});

export const profileSetSportsBet = (
  payload: Partial<ProfileState['sportsBet']>,
) => ({
  type: ProfileActionTypes.SetSportsBet,
  payload,
});

export const profileGetSportsBet = (payload: SportsBetFormikValues) => ({
  type: ProfileActionTypes.GetSportsBet,
  payload,
});
