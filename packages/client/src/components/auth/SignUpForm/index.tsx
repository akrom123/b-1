import React, { FC, FormEventHandler, ChangeEventHandler } from 'react';
import { TextInput } from '@betnomi/libs/components/TextInput';
import Button from '@betnomi/libs/components/Button';
import { Checkbox, Link, Spoiler } from '@betnomi/libs/components';
import { useTranslation } from '@betnomi/libs/utils/i18n';
import { FontIconName, FontIcon } from '@betnomi/libs/components/FontIcon';
import { FormikErrors, FormikTouched } from 'formik';
import { SignUpFormikValues } from '../../../hooks/formik/useSignUpFormik';
import styles from './styles.module.scss';
import { TextInputColor } from '@betnomi/libs/types';

interface IProps {
  values: SignUpFormikValues;
  errors: FormikErrors<SignUpFormikValues>;
  touched: FormikTouched<SignUpFormikValues>;
  loading?: boolean;

  onSubmit: FormEventHandler<HTMLFormElement>;
  onUserChange: (e: string | React.ChangeEvent<any>) => void;
  onEmailChange: (e: string | React.ChangeEvent<any>) => void;
  onPasswordChange: (e: string | React.ChangeEvent<any>) => void;
  onRefferalChange: (e: string | React.ChangeEvent<any>) => void;
  onTermsChange: (e: boolean) => void;
  handleBlurUser: ChangeEventHandler<HTMLInputElement>;
  handleBlurPassword: ChangeEventHandler<HTMLInputElement>;
  handleBlurEmail: ChangeEventHandler<HTMLInputElement>;
}

export const SignUpForm: FC<IProps> = ({ onSubmit,
  values,
  onEmailChange,
  onPasswordChange,
  onUserChange,
  onTermsChange,
  onRefferalChange,
  handleBlurUser,
  handleBlurPassword,
  handleBlurEmail,
  errors,
  touched,
  loading }) => {
  const { t } = useTranslation('main');
  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit} className={styles.form}>
        <TextInput
          value={values.username}
          onChange={onUserChange}
          left={<FontIcon name={FontIconName.User} size={'s'} />}
          placeholder={t('Username')}
          hasError={!!(errors.username && touched.username)}
          onBlur={handleBlurUser}
          inputClasses={styles.textInput}
          className={styles.input}
          color={TextInputColor.Secondary}

        />
        <TextInput
          value={values.email}
          onChange={onEmailChange}
          left={<FontIcon name={FontIconName.Email} size={'s'} className={styles.fontIcon} />}
          placeholder={t('Email')}
          onBlur={handleBlurEmail}
          hasError={!!(errors.email && touched.email)}
          inputClasses={styles.textInput}
          className={styles.input}
          color={TextInputColor.Secondary}
        />
        <TextInput
          type="password"
          value={values.password}
          onChange={onPasswordChange}
          left={<FontIcon name={FontIconName.Lock} size={'s'} className={styles.fontIcon} />}
          placeholder={t('Password')}
          hasError={!!(errors.password && touched.password)}
          onBlur={handleBlurPassword}
          inputClasses={styles.textInput}
          className={styles.input}
          color={TextInputColor.Secondary}
        />
        <div className={styles.terms}>
          <Checkbox
            checked={values.terms}
            onCheck={onTermsChange}
            className={styles.checkbox}
            hasError={!!(errors.terms && touched.terms)}
            labelClassName={styles.checkboxLabel}
          >
            {t('I agree to all')}
            {' '}
            <Link to={process.env.REACT_APP_TERMS_URL || '#'} className={styles.terms_link} stopPropagation>
              {t('Terms & Conditions')}
            </Link>
            {' '}
            {t('and I am over 18 years of age')}
          </Checkbox>
        </div>
        <Button type="submit" className={styles.submit} isLoading={loading}>{t('Sign Up')}</Button>
      </form>
    </div>
  );
};
