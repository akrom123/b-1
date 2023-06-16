import React, { ChangeEventHandler, FormEventHandler } from 'react';
import { TextInput } from '@betnomi/libs/components/TextInput';
import Button from '@betnomi/libs/components/Button';
import { FontIconName, FontIcon } from '@betnomi/libs/components/FontIcon';
import { useTranslation } from '@betnomi/libs/utils/i18n';
import { FormikErrors, FormikTouched } from 'formik';
import { SignInFormikValues } from '../../../hooks/formik/useSignInFormik';
import styles from './styles.module.scss';
import { TextInputColor } from '@betnomi/libs/types';
import { Checkbox } from '@betnomi/libs/components/Checkbox';

interface IProps {
  loading?: boolean;
  errors: FormikErrors<SignInFormikValues>;
  touched: FormikTouched<SignInFormikValues>;
  values: SignInFormikValues;

  onSubmit: FormEventHandler<HTMLFormElement>;
  onUserChange: ChangeEventHandler<HTMLInputElement>;
  onPasswordChange: ChangeEventHandler<HTMLInputElement>;
  onRememberMeChange: (val: boolean) => void;
  onRestoreOpen: () => void;
  handleBlurUser: ChangeEventHandler<HTMLInputElement>;
  handleBlurPassword: ChangeEventHandler<HTMLInputElement>;
}

export const SignInForm: React.FC<IProps> = ({
  onSubmit,
  values,
  onUserChange,
  handleBlurUser,
  handleBlurPassword,
  onPasswordChange,
  onRememberMeChange,
  onRestoreOpen,
  errors,
  touched,
  loading
}) => {
  const { t } = useTranslation('main');

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit} className={styles.form}>
        <TextInput
          value={values.username}
          onChange={onUserChange}
          onBlur={handleBlurUser}
          left={<FontIcon name={FontIconName.User} size={'s'} className={styles.fontIcon} />}
          placeholder={t('Username or Email')}
          hasError={!!(errors.username && touched.username)}
          inputClasses={styles.textInput}
          className={styles.input}
          color={TextInputColor.Secondary}
        />
        <TextInput
          type="password"
          value={values.password}
          onChange={onPasswordChange}
          onBlur={handleBlurPassword}
          left={<FontIcon name={FontIconName.Lock} size={'s'} className={styles.fontIcon} />}
          placeholder={t('Password')}
          hasError={!!(errors.password && touched.password)}
          inputClasses={styles.textInput}
          className={styles.input}
          color={TextInputColor.Secondary}
        />
        <div className={styles.options}>
          <Checkbox
            checked={values.rememberMe}
            onCheck={onRememberMeChange}
            labelClassName={styles.rememberMe}
          >Remember me</Checkbox>
          <a
            className={styles.restore}
            onClick={onRestoreOpen}
          >
            {t("Forgot password?")}
          </a>
        </div>

        <Button type="submit" className={styles.submit} isLoading={loading}>{t('Sign In')}</Button>
      </form>
    </div>
  );
};
