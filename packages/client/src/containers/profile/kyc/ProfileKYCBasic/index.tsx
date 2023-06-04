import React, { FC, useCallback } from 'react';
import ProfileKYCBasicForm from '../../../../components/profile/ProfileKYCBasicForm';
import { useProfileBasicFormik } from '../../../../hooks/formik/useProfileKYCBasicForm';

const ProfileKYCBasic: FC = () => {
  const {
    formik: {
      values,
      handleSubmit,
      handleChange,
      errors,
      touched,
      setFieldValue,
    },
    variants,
    onSearch,
    onChangeCountry,
    country,
    isLoading,
  } = useProfileBasicFormik();


  const handleTerms = useCallback((v: boolean) => {
    setFieldValue('terms', v);
  }, [values]);

  return (
    <ProfileKYCBasicForm
      values={values}
      errors={errors}
      touched={touched}
      countryOptions={variants}
      onSubmit={handleSubmit}
      onNameChange={handleChange('name')}
      onSurnameChange={handleChange('surname')}
      onDateChange={handleChange('date')}
      onZipCodeChange={handleChange('zipCode')}
      onStreetChange={handleChange('street')}
      onCityChange={handleChange('city')}
      onCountryChange={onChangeCountry}
      onGenderChange={handleChange('gender')}
      onTermsChange={handleTerms}
      onCountrySearch={onSearch}
      countryValue={country}
      loading={false}
    />
  );
};

export default ProfileKYCBasic;
