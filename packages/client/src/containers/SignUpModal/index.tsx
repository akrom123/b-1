import React, { useCallback, useState } from 'react';
import { LineDivorce } from '@betnomi/libs/components';
import { useDispatch } from 'react-redux';
import { useTranslation } from '@betnomi/libs/utils/i18n';
import { FormikHelpers } from 'formik';
import { useModal } from 'hooks/useModal';
import { useToasts } from '@betnomi/libs/hooks/useToasts';
import { HocModal } from '../../components/modal/HocModal';
import { SignUpForm } from '../../components/auth/SignUpForm';
import { ModalType } from '../../store/modal/types';
import { authSignUp } from '../../store/auth/actionCreators';
import { SignUpFormikValues, useSignUpFormik } from '../../hooks/formik/useSignUpFormik';
import { ModalComponentProps } from '../../components/modal/Modal';
import useShallowSelector from '../../hooks/useShallowSelector';
import { selectAuthSignUp } from '../../store/auth/selectors';
import { AuthErrorTransformResult } from '../../types/store/auth';
import styles from './styles.module.scss';

interface IProps extends ModalComponentProps { }

export const SignUpModal: React.FC<IProps> = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('main');
  const { isLoading } = useShallowSelector(selectAuthSignUp);
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
      values: SignUpFormikValues,
      { resetForm, setErrors }: FormikHelpers<SignUpFormikValues>,
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

        resetForm();
      };

      dispatch(authSignUp(values, callback));
    }, [dispatch, isLoading, showErrorToast, hideToast],
  );

  const {
    values, handleChange, handleSubmit,
    setFieldValue, errors, touched, handleBlur,
  } = useSignUpFormik(
    {
      username: '', password: '', email: '', referralCode: '', terms: false,
    },
    onSubmit,
  );
  const handleTerms = useCallback((v: boolean) => {
    setFieldValue('terms', v);
  }, [values]);

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
      <SignUpForm
        values={values}
        onUserChange={handleChange('username')}
        onPasswordChange={handleChange('password')}
        onEmailChange={handleChange('email')}
        onTermsChange={handleTerms}
        onRefferalChange={handleChange('referralCode')}
        onSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        loading={isLoading}
        handleBlurUser={handleBlur('username')}
        handleBlurPassword={handleBlur('password')}
        handleBlurEmail={handleBlur('email')}
      />
      <LineDivorce />
      <div className={styles.footer}>
        {t("Do you have an account?")} {' '}
        <span onClick={showModal(ModalType.SignIn)}>{t('Sign In')}</span>
      </div>
    </HocModal>
  );
};
