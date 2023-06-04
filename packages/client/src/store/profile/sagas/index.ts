import { takeLeading } from 'redux-saga/effects';
import { ProfileActionTypes } from '../actionTypes';
import { profileGetBasicSaga, profileSubmitBasicSaga } from './basic';


import { transactionAllSaga } from './transaction/transactionAll';
import { walletConfirmWithdrawSaga, walletWithdrawRequestCodeSaga, walletWithdrawSaga } from './wallet/withdraw';
import { sportbetsSaga } from './sportbets';

export default function* profileSaga() {
  yield takeLeading(ProfileActionTypes.GetBasic, profileGetBasicSaga);
  yield takeLeading(ProfileActionTypes.SubmitBasic, profileSubmitBasicSaga);
  yield takeLeading(ProfileActionTypes.Withdraw, walletWithdrawSaga);
  yield takeLeading(ProfileActionTypes.GetTransactionAll, transactionAllSaga);
  yield takeLeading(ProfileActionTypes.WithdrawConfirm, walletConfirmWithdrawSaga);
  yield takeLeading(ProfileActionTypes.WithdrawRequestCode, walletWithdrawRequestCodeSaga);
  yield takeLeading(ProfileActionTypes.GetSportsBet, sportbetsSaga);
}
