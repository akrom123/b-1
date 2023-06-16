import React, { ChangeEventHandler, FormEventHandler } from 'react';
import { TextInput } from '@betnomi/libs/components/TextInput';
import Button from '@betnomi/libs/components/Button';
import { FontIconName, FontIcon } from '@betnomi/libs/components/FontIcon';
import { useTranslation } from '@betnomi/libs/utils/i18n';
import { FormikErrors, FormikTouched } from 'formik';
import { RestorePasswordValues } from '../../../hooks/formik/useRestorePasswordFormik';
import styles from './styles.module.scss';
import { TextInputColor } from '@betnomi/libs/types';

interface IProps {
  loading?: boolean;
  errors: FormikErrors<RestorePasswordValues>;
  touched: FormikTouched<RestorePasswordValues>;
  values: RestorePasswordValues;

  onSubmit: FormEventHandler<HTMLFormElement>;
  onUserChange: ChangeEventHandler<HTMLInputElement>;
  handleBlurUser: ChangeEventHandler<HTMLInputElement>;
}

export const RestorePasswordForm: React.FC<IProps> = ({
  onSubmit, errors, touched, values, onUserChange, loading,
}) => {
  const { t } = useTranslation('main');

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit} className={styles.form}>
        <TextInput
          value={values.username}
          onChange={onUserChange}
          left={<FontIcon name={FontIconName.User} size={'s'} />}
          placeholder={t('Username or Email')}
          hasError={!!(errors.username && touched.username)}
          inputClasses={styles.textInput}
          className={styles.input}
          color={TextInputColor.Secondary}
        />
        <Button
          type="submit"
          className={styles.submit}
          isLoading={loading}
        >
          {t('Resend password')}
        </Button>
      </form>
    </div>
  );
};
