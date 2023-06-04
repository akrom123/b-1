import React, { FC } from 'react';
import { CoinSelect } from '@betnomi/libs/components/CoinSelect';
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon';
import { Button, Coin, Link } from '@betnomi/libs/components';
import { ButtonColor, coinNames, CoinType } from '@betnomi/libs/types';
import { CopyText } from '@betnomi/libs/components/CopyText';
import QrCode from '@betnomi/libs/components/QrCode';
import styles from './styles.module.scss';
import { useTranslation } from '../../../i18n';
import { Chips } from '@betnomi/libs/components/Chips';

interface Props {
  coin: CoinType;
  network?: CoinType;
  balance?: number;
  arrivalTime: number;
  depositAddress: string;
  networks?: CoinType[];
  isLoadingDepositAddress?: boolean;
  onAddressCopy?: () => void;
  onChangeCoin: (val: CoinType) => void;
  onChangeNetwork: (val: CoinType) => void;
}

const WalletDepositForm: FC<Props> = ({ coin,
  balance,
  arrivalTime,
  depositAddress,
  network,
  networks,
  isLoadingDepositAddress,
  onAddressCopy,
  onChangeCoin,
  onChangeNetwork }) => {
  const { t } = useTranslation('profile');
  const networkName = network || coin;

  return (
    <div>
      <p className={styles.label}>{t('Select Coin')}</p>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <CoinSelect onSelect={onChangeCoin} selected={coin} withName />
          <div className={styles.balance}>
            {t('Available balance')}
            <span className={styles.balanceValue}>{`${balance || 0} ${coin}`}</span>
          </div>
          <div className={styles.notice}>
            <FontIcon name={FontIconName.Notify} size={'m'} />
            {t('Deposit Notice')}
          </div>
          <p className={styles.noticeItem}>
            {t(
              '1. If you have deposited, please pay attention to the text messages, site letters and emails we send to you.',
            )}
          </p>
          <p className={styles.noticeItem}>
            {t('2. Coins will be deposited after')}
            {' '}
            <Link to="/#" className={styles.noticeLink}>
              {t('{{count}} network', { count: 12 })}
            </Link>
            {' '}
            {t('confirmations.')}
          </p>
        </div>
        <div className={styles.right}>
          {networks && networks.length > 1 && (
            <div className={styles.networks}>
              <Chips
                bordered
                // onChange={(target) => onChangeNetwork(target)}
                items={
                  networks.map((target) => ({
                    title: target,
                  }))
                } />
            </div>
          )}

          <div className={styles.network}>
            <span>
              Network name:
              {' '}
              <span className={styles.white}>{coinNames[networkName]}</span>
            </span>
            <span>
              Average arrival time:
              {' '}
              <span className={styles.white}>
                {arrivalTime}
                {' '}
                minute
              </span>
            </span>
          </div>
          <div className={styles.qrcontainer}>
            <div className={styles.address}>
              <div className={styles.addressLabel}>{t('Address')}</div>
              <CopyText
                // text={isLoadingDepositAddress ? t('Loading') : depositAddress}
                text={'3AqGWiJBZBuPAZwFFKUYywg8Smi1GKABm3'}
                disabled={isLoadingDepositAddress}
                onCopy={onAddressCopy}
              />
            </div>
            <div className={styles.qr}>
              {/* <QrCode value={depositAddress} /> */}
              <svg height="128" width="128" viewBox="0 0 29 29"><path fill="transparent" d="M0,0 h29v29H0z" shape-rendering="crispEdges"></path><path fill="currentColor" d="M0 0h7v1H0zM8 0h1v1H8zM11 0h1v1H11zM13 0h3v1H13zM18 0h3v1H18zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM8 1h2v1H8zM11 1h1v1H11zM13 1h1v1H13zM16 1h1v1H16zM18 1h1v1H18zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM10 2h2v1H10zM16 2h1v1H16zM18 2h1v1H18zM20 2h1v1H20zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h2v1H8zM11 3h2v1H11zM14 3h2v1H14zM17 3h2v1H17zM20 3h1v1H20zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM10 4h3v1H10zM14 4h1v1H14zM16 4h1v1H16zM18 4h2v1H18zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM12 5h2v1H12zM15 5h2v1H15zM19 5h2v1H19zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM8 7h1v1H8zM10 7h3v1H10zM15 7h3v1H15zM20 7h1v1H20zM0 8h1v1H0zM2 8h2v1H2zM5 8h3v1H5zM10 8h2v1H10zM13 8h1v1H13zM15 8h2v1H15zM18 8h1v1H18zM20 8h1v1H20zM22 8h1v1H22zM25 8h1v1H25zM27,8 h2v1H27zM2 9h2v1H2zM5 9h1v1H5zM8 9h1v1H8zM13 9h3v1H13zM19 9h3v1H19zM23 9h3v1H23zM27 9h1v1H27zM0 10h1v1H0zM2 10h1v1H2zM4 10h3v1H4zM8 10h1v1H8zM10 10h2v1H10zM13 10h1v1H13zM16 10h1v1H16zM23 10h1v1H23zM25 10h1v1H25zM27 10h1v1H27zM0 11h1v1H0zM10 11h1v1H10zM15 11h2v1H15zM18 11h2v1H18zM21 11h2v1H21zM27,11 h2v1H27zM1 12h2v1H1zM6 12h1v1H6zM8 12h1v1H8zM11 12h1v1H11zM14 12h4v1H14zM19 12h2v1H19zM23 12h3v1H23zM27 12h1v1H27zM0 13h2v1H0zM4 13h2v1H4zM7 13h1v1H7zM9 13h1v1H9zM12 13h1v1H12zM14 13h2v1H14zM21 13h1v1H21zM25,13 h4v1H25zM2 14h2v1H2zM5 14h2v1H5zM12 14h2v1H12zM18 14h3v1H18zM23 14h1v1H23zM26,14 h3v1H26zM1 15h2v1H1zM5 15h1v1H5zM7 15h2v1H7zM11 15h1v1H11zM14 15h3v1H14zM20 15h6v1H20zM0 16h2v1H0zM3 16h1v1H3zM5 16h4v1H5zM12 16h1v1H12zM14 16h2v1H14zM18 16h1v1H18zM21 16h1v1H21zM24 16h1v1H24zM1 17h2v1H1zM5 17h1v1H5zM11 17h2v1H11zM14 17h2v1H14zM17 17h1v1H17zM19 17h3v1H19zM23 17h1v1H23zM25 17h2v1H25zM28,17 h1v1H28zM0 18h1v1H0zM2 18h2v1H2zM5 18h2v1H5zM9 18h1v1H9zM12 18h4v1H12zM18 18h1v1H18zM20 18h1v1H20zM25 18h1v1H25zM3 19h1v1H3zM7 19h1v1H7zM9 19h1v1H9zM13 19h3v1H13zM17 19h7v1H17zM25,19 h4v1H25zM1 20h1v1H1zM3 20h4v1H3zM10 20h1v1H10zM13 20h2v1H13zM16 20h2v1H16zM20 20h6v1H20zM28,20 h1v1H28zM8 21h2v1H8zM11 21h2v1H11zM15 21h2v1H15zM20 21h1v1H20zM24 21h1v1H24zM26 21h1v1H26zM28,21 h1v1H28zM0 22h7v1H0zM8 22h2v1H8zM14 22h1v1H14zM16 22h2v1H16zM20 22h1v1H20zM22 22h1v1H22zM24 22h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM8 23h2v1H8zM13 23h2v1H13zM16 23h1v1H16zM18 23h1v1H18zM20 23h1v1H20zM24 23h1v1H24zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM11 24h2v1H11zM15 24h1v1H15zM20 24h5v1H20zM27 24h1v1H27zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h3v1H8zM13 25h1v1H13zM16 25h2v1H16zM21 25h1v1H21zM23 25h1v1H23zM26 25h1v1H26zM28,25 h1v1H28zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM8 26h1v1H8zM10 26h1v1H10zM17 26h2v1H17zM22 26h2v1H22zM25 26h2v1H25zM28,26 h1v1H28zM0 27h1v1H0zM6 27h1v1H6zM9 27h2v1H9zM25 27h1v1H25zM27 27h1v1H27zM0 28h7v1H0zM8 28h1v1H8zM10 28h2v1H10zM13 28h1v1H13zM15 28h1v1H15zM17 28h4v1H17zM22 28h6v1H22z" shape-rendering="crispEdges"></path></svg>
            </div>
          </div>
          <div className={styles.note}>
            <div>
              <div className={styles.noticeItem}>
                {t('Send only {{networkName}} to this deposit address', { networkName })}
              </div>
              <div className={styles.noticeItem}>
                <p>
                  {t(
                    'Sending coin or token other than {{networkName}} to this address may result in the loss of your deposit.',
                    { networkName },
                  )}
                </p>
              </div>
            </div>
            <Coin coin={networkName} size={'xxxl'} className={styles.coin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { WalletDepositForm };
