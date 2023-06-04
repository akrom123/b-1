import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { useFakeSelectOptions } from '@betnomi/libs/hooks/storybook/useFakeSelectOptions';
import { FormikErrors, FormikTouched } from 'formik';
import ProfileKYCBasicForm from './index';
import { ProfileKYCBasicFormikValues } from '../../../hooks/formik/useProfileKYCBasicForm';
import { Gender } from '../../../constants/gender';

storiesOf('Profile', module).add('ProfileKYCBasicForm', () => {
  const { options } = useFakeSelectOptions();
  const values: ProfileKYCBasicFormikValues = {
    name: text('Name', ''),
    surname: text('Surname', ''),
    zipCode: text('Zip Code', ''),
    date: text('Date', ''),
    street: text('Street', ''),
    country: text('Country', ''),
    area: text('Area', ''),
    city: text('City', ''),
    gender: Gender.Male,
    terms: false,
  };

  const touched: FormikTouched<ProfileKYCBasicFormikValues> = {
    name: true,
    surname: true,
    zipCode: true,
    date: true,
    street: true,
    city: true,
    area: true,
    country: true,
    terms: true
  };

  const errors: FormikErrors<ProfileKYCBasicFormikValues> = {
    name: text('NameError', ''),
    surname: text('SurnameError', ''),
    zipCode: text('ZipCodeError', ''),
    date: text('DateError', ''),
    street: text('StreetError', ''),
    city: text('CityError', ''),
    area: text('AreaError', ''),
    country: text('CountryError', ''),
    terms: text('TermsError', ''),
  };

  const onSubmit = action('onSubmit');
  const onTouch = action('onTouch');

  const onNameChange = action('onNameChange');
  const onSurnameChange = action('onSurnameChange');
  const onZipCodeChange = action('onZipCodeChange');
  const onDateChange = action('onDateChange');
  const onStreetChange = action('onStreetChange');
  const onCityChange = action('onCityChange');
  const onCountryChange = action('onCountryChange');
  const onGenderChange = action('onGenderChange');
  const onTermsChange = action('onTermsChange');

  const onCountrySearch = action('onCountrySearch');

  return (
    <div style={{ width: 600 }}>
      <ProfileKYCBasicForm
        values={values}
        touched={touched}
        errors={errors}
        onNameChange={onNameChange}
        onSurnameChange={onSurnameChange}
        onZipCodeChange={onZipCodeChange}
        onDateChange={onDateChange}
        onStreetChange={onStreetChange}
        onSubmit={onSubmit}
        onCityChange={onCityChange}
        onCountryChange={onCountryChange}
        countryOptions={options}
        onGenderChange={onGenderChange}
        onTermsChange={onTermsChange}
        onCountrySearch={onCountrySearch}
      />
    </div>
  );
});
