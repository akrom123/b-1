import React, { forwardRef, useCallback, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import cx from 'classnames';
import { format, getMonth, getYear, isValid, parse } from 'date-fns';
import { useTranslation } from '@betnomi/client/src/i18n';
import { FontIcon, FontIconName } from '../FontIcon';
import styles from './styles.module.scss';
import { TextInput } from '@betnomi/libs/components/TextInput';
import { TextInputColor } from '@betnomi/libs/types';
import classNames from 'classnames';

interface Props {
  value?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  className?: string;
  dateFormat?: string;
  customInput?: React.ReactNode;
  placeholder?: string;
  onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  color?: TextInputColor
}

const DateInput: React.FunctionComponent<Props> = ({
  value,
  disabled,
  onChange,
  className,
  dateFormat = 'yyyy-MM-dd',
  customInput,
  placeholder = 'Select a date',
  onBlur,
  hasError,
  color = TextInputColor.Secondary
}) => {
  const { t } = useTranslation('main');
  const [date, setDate] = useState<Date>();

  const [mode, setMode] = useState<'day' | 'month' | 'year'>('day');

  const onDateChange = useCallback(
    (selected: Date) => {
      if (!isValid(selected)) return;

      setDate(selected);
      if (dateFormat) onChange(format(selected, dateFormat));
    },
    [onChange, dateFormat, setDate],
  );

  useEffect(() => {
    if (!value) {
      setDate(undefined);
      return;
    }

    const parsedDate = parse(value, dateFormat, new Date());
    if (!isValid(parsedDate)) return;

    setDate(parsedDate);
  }, [value, dateFormat]);

  const DefaultInput = forwardRef((props, ref: any) => (
    <TextInput
      {...props}
      ref={ref}
      left={<FontIcon name={FontIconName.Calendar} size={'m'} className={styles.icon} />}
      color={color}
    />
  ));

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const renderCustomHeader: React.FC<any> = ({
    date,
    decreaseMonth,
    increaseMonth,
  }) => (
    <div className={styles.header}>
      <div
        className={classNames(styles.select, { [styles.active]: mode === 'year' })}
        onClick={() => setMode(mode === 'year' ? 'day' : 'year')}
      >
        {getYear(date)}<FontIcon name={FontIconName.ArrowRight} />
      </div>
      <div
        className={classNames(styles.select, { [styles.active]: mode === 'month' })}
        onClick={() => setMode(mode === 'month' ? 'day' : 'month')}
      >
        {months[getMonth(date)]}<FontIcon name={FontIconName.ArrowRight} />
      </div>
      <FontIcon name={FontIconName.ArrowRight} className={classNames(styles.monthButton, styles.prev)} onClick={decreaseMonth} />
      <FontIcon name={FontIconName.ArrowRight} className={classNames(styles.monthButton)} onClick={increaseMonth} />
    </div>
  )


  return (
    <div className={cx(
      styles.wrapper,
      styles.datepicker_wrapper,
      className,
      { [styles.error]: hasError },
    )}
    >
      <DatePicker
        onBlur={onBlur}
        placeholderText={placeholder}
        dateFormat={dateFormat}
        disabled={disabled}
        selected={date}
        onChange={onDateChange}

        showPreviousMonths={false}
        monthsShown={1}
        showYearPicker={mode === 'year'}
        showMonthYearPicker={mode === 'month'}
        popperClassName={styles.popper}
        dayClassName={() => styles.day}
        customInput={customInput || <DefaultInput />}
        renderCustomHeader={renderCustomHeader}
        showPopperArrow={false}
      />
    </div>
  );
};

export { DateInput };
