import React, { useCallback, useState } from 'react';
import { LineDivorce } from '@betnomi/libs/components';
import { useDispatch } from 'react-redux';
import { useTranslation } from '@betnomi/libs/utils/i18n';
import { showSuccessToast } from '@betnomi/libs/components/Toaster';
import { FormikHelpers } from 'formik';
import { useModal } from 'hooks/useModal';
import { useToasts } from '@betnomi/libs/hooks/useToasts';
import { AuthErrorTransformResult } from '../../types/store/auth';
import { HocModal } from '../../components/modal/HocModal';
import { SignInForm } from '../../components/auth/SignInForm';
import { ModalType } from '../../store/modal/types';
import { authLogin } from '../../store/auth/actionCreators';
import { SignInFormikValues, useSignInFormik } from '../../hooks/formik/useSignInFormik';
import useShallowSelector from '../../hooks/useShallowSelector';
import { selectAuthLogin } from '../../store/auth/selectors';
import { ModalComponentProps } from '../../components/modal/Modal';
import styles from './styles.module.scss';

interface IProps extends ModalComponentProps { }

export const SignInModal: React.FC<IProps> = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('main');
  const { isLoading } = useShallowSelector(selectAuthLogin);
  const { showModal } = useModal();
  const { showErrorToast, hideToast } = useToasts();

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    setIsMobile(isMobile)
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const onSubmit = useCallback(
    (
      values: SignInFormikValues,
      { resetForm, setErrors }: FormikHelpers<SignInFormikValues>,
    ) => {
      hideToast();

      const callback = (e?: AuthErrorTransformResult) => {
        if (e) {
          if (e.message) {
            showErrorToast(t(e.message), t('Warning'));
          }
          if (e.fields) {
            setErrors(e.fields);
          }
          return;
        }
        showSuccessToast('', t('Welcome'));
        resetForm();
      };

      dispatch(authLogin(values, callback));
    },
    [isLoading, dispatch, showErrorToast, hideToast],
  );

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    setFieldValue,
  } = useSignInFormik(
    {
      username: 'testvnd@test.com',
      password: 'Password1a',
      rememberMe: false,
    },
    onSubmit,
  );

  return (
    <HocModal
      onClose={onCloseModal}
      title={(
        <span className={styles.label}>
          {t('Welcome back to')}
          <span className={styles.brand}>
            {' '}
            {t('Betnomi')}
          </span>
        </span>
      )}
      style={{ width: isMobile ? '100%' : '27rem' }}
    >
      <SignInForm
        values={values}
        onUserChange={handleChange('username')}
        onPasswordChange={handleChange('password')}
        onRememberMeChange={(val) => setFieldValue('rememberMe', val)}
        onSubmit={handleSubmit}
        onRestoreOpen={showModal(ModalType.RestorePassword)}
        handleBlurUser={handleBlur('username')}
        handleBlurPassword={handleBlur('password')}
        errors={errors}
        touched={touched}
        loading={isLoading}
      />
      <LineDivorce />
      <div className={styles.footer}>
        {t("Don't have an account?")} {' '}
        <span onClick={showModal(ModalType.SignUp)}>{t('Sign Up')}</span>
      </div>
    </HocModal>
  );
};
