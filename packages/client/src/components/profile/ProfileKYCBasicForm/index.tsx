import React, {
  ChangeEventHandler, FC, FocusEventHandler, FormEventHandler, useCallback,
} from 'react';
import { TextInput } from '@betnomi/libs/components/TextInput';
import { DateInput } from '@betnomi/libs/components/DateInput';
import { RadioButton, RadioColor } from '@betnomi/libs/components/RadioButton';
import { Button, Checkbox, Link } from '@betnomi/libs/components';
import { FormikErrors, FormikTouched } from 'formik';
import { Autocomplete, Option } from '@betnomi/libs/components/Autocomplete';
import styles from './styles.module.scss';
import { useTranslation } from '../../../i18n';
import { ProfileKYCBasicFormikValues } from '../../../hooks/formik/useProfileKYCBasicForm';
import { Gender } from '../../../constants/gender';
import { useGender } from '../../../hooks/profile/useGender';
import { Select, SelectColor } from '@betnomi/libs/components/Select';
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon';
import { TextInputColor } from '@betnomi/libs/types';

export interface GenderItem {
  type: Gender;
  title: string;
}

interface Props {
  values: ProfileKYCBasicFormikValues;
  errors: FormikErrors<ProfileKYCBasicFormikValues>;
  touched: FormikTouched<ProfileKYCBasicFormikValues>;
  countryOptions: Option[];
  countryValue?: Option;
  loading?: boolean;

  onSubmit: FormEventHandler<HTMLFormElement>;

  onNameChange: ChangeEventHandler<HTMLInputElement>;
  onSurnameChange: ChangeEventHandler<HTMLInputElement>;
  onDateChange: (value: string) => void;
  onZipCodeChange: ChangeEventHandler<HTMLInputElement>;
  onStreetChange: ChangeEventHandler<HTMLInputElement>;
  onCityChange: ChangeEventHandler<HTMLInputElement>;
  onCountryChange: (value: Option) => void;
  onGenderChange: (value: Gender) => void;
  onTermsChange: (value: boolean) => void;

  onCountrySearch: (value: string) => void;
}

const ProfileKYCBasicForm: FC<Props> = ({
  values,
  onNameChange,
  onSurnameChange,
  onDateChange,
  onZipCodeChange,
  onStreetChange,
  onSubmit,
  loading,
  onCityChange,
  onCountryChange,
  onGenderChange,
  onTermsChange,
  onCountrySearch,
  countryOptions,
  countryValue,
}) => {
  const { t } = useTranslation('profile');

  const { genderItems } = useGender();

  const radioButtonHandler = useCallback(
    (type: Gender) => (val: boolean) => {
      if (!val) return;
      onGenderChange(type);
    },
    [genderItems],
  );

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <div className={styles.personalData}>
          <div>
            <div className={styles.label}>{t('First Name')}</div>
            <TextInput
              className={styles.input}
              value={values.name}
              placeholder={t('Name')}
              onChange={onNameChange}
              disabled={loading}
              color={TextInputColor.Secondary}
            />
          </div>
          <div>
            <div className={styles.label}>{t('Last Name')}</div>
            <TextInput
              className={styles.input}
              value={values.surname}
              placeholder={t('Surname')}
              onChange={onSurnameChange}
              disabled={loading}
              color={TextInputColor.Secondary}
            />
          </div>
          <div>
            <div className={styles.label}>{t('Birthday')}</div>
            <DateInput
              onChange={onDateChange}
              value={values.date}
              disabled={loading}
              color={TextInputColor.Secondary}
            />
          </div>
          <div>
            <div className={styles.label}>{t('Gender')}</div>
            <div className={styles.gender}>
              <div className={styles.radioGroup}>
                {genderItems.map((value) => (
                  <RadioButton
                    key={value.type}
                    checked={value.type === values.gender}
                    onCheck={radioButtonHandler(value.type)}
                    disabled={loading}
                    value={value}
                    color={RadioColor.Secondary}
                  >
                    {value.type}
                  </RadioButton>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.label}>{t('Address')}</div>
        <div className={styles.address}>
          <TextInput
            className={styles.input}
            value={values.street}
            onChange={onStreetChange}
            placeholder={t('Street')}
            disabled={loading}
            color={TextInputColor.Secondary}
          />
          <TextInput
            className={styles.input}
            value={values.zipCode}
            onChange={onZipCodeChange}
            placeholder={t('Postcode')}
            disabled={loading}
            color={TextInputColor.Secondary}
          />
          <TextInput
            className={styles.input}
            placeholder={t('City')}
            onChange={onCityChange}
            value={values.city}
            disabled={loading}
            color={TextInputColor.Secondary}
          />
          <Select
            color={SelectColor.Secondary}
            placeholder={<>Country</>}
            valueRenderer={(option) => <>{option?.label as string}</>}
            optionRenderer={(item) =>
              <RadioButton
                key={item.label}
                checked={item.value === countryValue?.value}
                onCheck={() => { }}
                value={item.value}
                color={RadioColor.Secondary}
              >
                <div className={styles.selectOptionTitle}>
                  {item.label}
                </div>
              </RadioButton>
            }
            variants={countryOptions}
            onChange={(item) => onCountryChange(item)}
            value={countryOptions.find(c => c.value === values.country)}
          ></Select>
        </div>
        <Checkbox
          checked={values.terms}
          onCheck={onTermsChange}
          className={styles.checkbox}
        >
          <div className={styles.checkboxLabel}>
            {t('I agree to all')}
            {' '}
            <Link to={process.env.REACT_APP_TERMS_URL || '#'} className={styles.terms_link} stopPropagation>{t('Terms & Conditions')}</Link>
            {' '}
            {t('and certify that the above information is true and correct.')}
          </div>
        </Checkbox>
        <Button
          className={styles.button}
          type="submit"
          isLoading={loading}
        >
          {t('Save Changes')}
        </Button>
      </form>
    </div>
  );
};

export default ProfileKYCBasicForm;
