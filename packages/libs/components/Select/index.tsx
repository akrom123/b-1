import React, { FC, useRef } from 'react';
import { Manager, Popper, Reference } from 'react-popper';
import { usePopperDropdown } from '@betnomi/libs/hooks/ui/usePopperDropdown';
import { useFocusEvent } from '@betnomi/libs/hooks/useFocusEvent';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../FontIcon';
import { useOnClickOutside } from '@betnomi/libs/hooks/useOnClickOutside';

export interface Option<T extends string = string> extends Record<string, any> {
  value: T;
  label: string;
}

interface Props {
  variants: Option[];
  value?: Option;
  optionRenderer?: (current: Option<any>) => JSX.Element;
  valueRenderer?: (current: Option<any>) => JSX.Element;
  placeholder?: JSX.Element;
  disabled?: boolean;
  justify?: boolean;
  onChange: (val: Option<any>) => void;
  className?: string;
  listboxClassName?: string;
  optionClassName?: string;
  popperClassName?: string;
}

const defaultValueRenderer = (current: Option) => (
  <div className={styles.value}>{current.label}</div>
);

const defaultOptionRenderer = (current: Option) => (
  current.label
);

const Select: FC<Props> = ({
  value,
  variants,
  disabled,
  optionRenderer = defaultOptionRenderer,
  placeholder,
  valueRenderer = defaultValueRenderer,
  onChange,
  className,
  listboxClassName,
  optionClassName,
  popperClassName,
  justify = true,
}) => {
  const { onFocus, onBlur, focused } = useFocusEvent();
  const modifiers = usePopperDropdown(0, 10, justify);
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => onBlur());

  return (
    <div className={styles.wrapper} ref={ref}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <div ref={ref} onClick={() => focused ? onBlur() : onFocus()}>
              <button
                className={classNames(styles.control, className, { [styles.expanded]: focused })}
                type="button"
                disabled={disabled}
              >
                {value ? (
                  <div className={styles.value}>{valueRenderer(value)}</div>
                ) : (
                  <div className={styles.empty}>{placeholder}</div>
                )}
                <FontIcon
                  name={FontIconName.ChevronDown}
                  size={'s'}
                  className={styles.arrow}
                />
              </button>
            </div>
          )}
        </Reference>

        <Popper modifiers={modifiers}>
          {({ ref, style }) => (
            <div
              className={classNames(
                styles.popper,
                popperClassName,
                {
                  [styles.hidden]: !focused,
                },
              )}
              onBlur={onBlur}
              ref={ref}
              style={style}
            >
              <div className={classNames(styles.listbox, listboxClassName)}>
                {variants.map((variant) => (
                  <div
                    className={classNames(styles.option, optionClassName)}
                    onClick={() => onChange(variant)}
                    key={variant.value}
                  >
                    {optionRenderer(variant)}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Popper>
      </Manager>
    </div>
  );
};

export { Select };
