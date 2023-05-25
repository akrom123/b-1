
import { TextInput } from "@betnomi/libs/components/TextInput";
import React, { FC, useState } from 'react';
import { useTranslation } from "i18n";
import styles from './styles.module.scss';
import { Manager, Popper, Reference } from 'react-popper';
import { usePopperDropdown } from '@betnomi/libs/hooks/ui/usePopperDropdown';
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon';
import classNames from "classnames";
import { useFocusEvent } from "@betnomi/libs/hooks/useFocusEvent";

interface IProps {
  justify?: boolean
}

const SearchInput: React.FC<IProps> = ({ justify = true }) => {

  const { onFocus, onBlur, focused } = useFocusEvent();
  const modifiers = usePopperDropdown(0, 10, justify);

  const { t } = useTranslation();

  //for search
  const [searchValue, setSearchValue] = useState('')
  // const [searchResultIsOpen, setSearchResultIsOpen] = useState(false)

  // const handleSearch = (e: any) => {
  //   setSearchValue(e.target.value)
  //   if (e.target.value) {
  //     setSearchResultIsOpen(true)
  //   }
  // }
  // const handleClearBtn = () => {
  //   setSearchValue('')
  //   setSearchResultIsOpen(false)
  // }
  // const handleSearchBlur = () => {
  //   setSearchResultIsOpen(false)
  // }
  // const handleSearchFocus = () => {
  //   if (searchValue) {
  //     setSearchResultIsOpen(true)
  //   }
  // }


  return <div className={styles.searchInputWrapper}>
    <Manager>
      <Reference>
        {({ ref }) => (
          <div
            ref={ref}
          >
            <TextInput
              value={searchValue}
              type={"search"}
              // onChange={handleSearch}
              onFocus={onFocus}
              onBlur={onBlur}
              // handleClearBtn={handleClearBtn}
              left={<FontIcon name={FontIconName.Search} size={'s'} />}
              placeholder={t('Search game')}
              className={styles.searchInput}
              inputClasses={styles.inputClasses}
            />
          </div>
        )}
      </Reference>

      <Popper modifiers={modifiers}>
        {({ ref, style }) => (
          <div
            className={classNames(
              styles.popper,
              styles.searchInputDropdown,
              {
                [styles.hidden]: !focused,
              }
            )}
            ref={ref}
            style={style}
          >
            <div className={styles.searchResult}>
              <div className={styles.searchInputTitle}>
                We found{' '}<span className={styles.searchInputLength}> 3 </span>
                results for <span className={styles.searchInputValue}>money train</span>
              </div>
              <ul className={styles.searchInputList}>
                <li>
                  <a className={styles.searchInputListItem} href="/casino/21836">
                    <img
                      width="65"
                      height="85"
                      decoding="async"
                      className={styles.searchInputListItemImage}
                      src="https://images.betnomi.com/29ef79a8-938a-48e4-b55c-1430ee1a78c0?auto=format&amp;fit=max&amp;w=256&amp;q=10"
                    />
                    <div className={styles.searchInputListItemTitle}>
                      <div className={styles.searchInputListItemName}>
                        <span className={styles.searchInputListItemHighlight}>Money Train</span>
                      </div>
                      <div className={styles.searchInputListItemRTP}>RTP:
                        <span className={styles.searchInputListItemHighlight}>96.2%</span>
                      </div>
                      <div className={styles.searchInputListItemProviderContainer}>
                        <span className={styles.searchInputListItemProvider}>Relax Gaming</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Popper>
    </Manager>
  </div>
}

export { SearchInput }