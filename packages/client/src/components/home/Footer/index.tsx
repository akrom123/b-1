import React from 'react';
import { FontIcon, FontIconName } from '@betnomi/libs/components/FontIcon';
import CoinsContainer from '../../layout/CoinsContainer';
import { FooterNav } from '../FooterNav';
import styles from './styles.module.scss';

import logo from '@betnomi/libs/assets/img/new-logo.svg';
import shield from '@betnomi/libs/assets/img/shield.svg';
import shield18 from '@betnomi/libs/assets/img/shield18.svg';
import gambling from '@betnomi/libs/assets/img/Responsible_Gambling.svg';
import bitcoin from '@betnomi/libs/assets/img/coins/bitcoin.svg';
import { CoinType } from "@betnomi/libs/types";

type Props = {
    rates?: Partial<Record<CoinType, number>>;
    isMobile: boolean;
};

export const Footer: React.FC<Props> = ({ rates = {}, isMobile = false }) => {

    const formattedPrice = (num: number): string => {
        const priceArr = String(num).split('.');
        priceArr[1] = priceArr[1].substr(0, 2)

        return priceArr.join(".")
    }

    return (
        <footer className={styles.footer}>
            <CoinsContainer isMobile={isMobile} />
            <FooterNav />
            <svg viewBox="0 0 137 30" fill="none" className={styles.footerLogo}><path d="M11.995 12.682s3.435-1.571 5.81-2.704c2.375-1.133 4.933-3.033 5.08-5.59.109-1.755-1.938-3.253-4.824-3.947-2.997-.731-7.053-.548-8.112.511-1.206 1.206-1.28 2.668-.293 5.372.987 2.704 2.339 6.358 2.339 6.358Zm.657 1.827s2.266 6.066 3.07 8.331c.804 2.266 2.12 6.212 5.92 4.422s7.6-13.776 5.663-16.59c-2.12-3.106-12.168 2.887-14.653 3.837Zm-1.754.841s1.28 3.434 2.156 5.883c.877 2.448 1.535 6.467.183 8.112-.914 1.133-3.8.548-5.408-.439-1.937-1.17-5.152-3.179-5.59-5.664-.512-2.777 1.497-4.567 4.092-5.773 2.63-1.242 4.567-2.12 4.567-2.12Zm-.693-1.864S8.889 9.905 7.939 7.31c-.913-2.558-2.448-4.276-4.933-2.193C.777 7.018.12 10.965.01 12.974c-.146 2.777 1.315 4.641 4.312 3.216 3.033-1.352 5.883-2.704 5.883-2.704Z" fill="#6DD338"></path><path d="M49.83 15.692c.694-.284 1.278-.674 1.717-1.242.512-.64.767-1.42.767-2.343 0-.781-.219-1.491-.62-2.13-.403-.64-1.024-1.101-1.828-1.456s-1.754-.533-2.85-.533H40v15.8h7.308c1.096 0 2.047-.178 2.887-.533a4.368 4.368 0 0 0 1.864-1.527c.438-.64.657-1.42.657-2.237 0-.958-.292-1.775-.877-2.52-.548-.64-1.206-1.101-2.01-1.279Zm-6.432-4.97h3.143c.73 0 1.315.178 1.717.497.402.32.585.781.585 1.385 0 .603-.183 1.065-.585 1.384-.402.32-.986.497-1.717.497h-3.143v-3.763Zm5.226 9.834c-.402.355-1.024.533-1.79.533h-3.436v-4.047h3.362c.767 0 1.352.177 1.79.532.439.355.658.852.658 1.527.037.639-.182 1.1-.584 1.455Zm25.359-12.39h-3.435v3.053h-1.534v2.734h1.534v5.893c0 2.628 1.389 3.941 4.166 3.941h2.12V20.7h-1.572c-.475 0-.804-.071-.987-.249-.182-.177-.292-.462-.292-.852v-5.61h2.85v-2.733h-2.85v-3.09Zm12.167 2.875c-.803 0-1.57.142-2.228.462-.585.284-1.096.639-1.498 1.1V11.22h-3.399v12.568h3.399v-6.924c0-.958.255-1.704.73-2.2.512-.498 1.17-.782 2.047-.782.84 0 1.535.249 2.01.781.475.497.73 1.243.73 2.201v6.924h3.399v-7.35c0-1.704-.475-3.017-1.425-3.976-.987-.923-2.23-1.42-3.764-1.42Zm13.74-.035c-3.69 0-6.687 2.911-6.687 6.497S96.2 24 99.89 24c3.691 0 6.687-2.911 6.687-6.497-.036-3.586-3.033-6.497-6.687-6.497Zm0 9.799c-1.864 0-3.362-1.456-3.362-3.267 0-1.81 1.498-3.266 3.362-3.266s3.362 1.456 3.362 3.266c0 1.811-1.498 3.267-3.362 3.267Zm24.958-9.764c-.95 0-1.827.213-2.631.675-.767.426-1.352.958-1.754 1.633a4.446 4.446 0 0 0-1.791-1.669c-.803-.426-1.717-.639-2.704-.639-.804 0-1.534.142-2.192.462-.585.248-1.06.639-1.462 1.065v-1.35h-3.398v12.569h3.398v-6.924c0-.958.256-1.668.731-2.165.512-.497 1.169-.746 2.046-.746.841 0 1.535.249 2.01.746.475.497.731 1.207.731 2.165v6.924h3.398v-6.924c0-.958.256-1.668.731-2.165.512-.497 1.169-.746 2.01-.746.84 0 1.535.249 2.01.746.475.497.73 1.207.73 2.165v6.924h3.399v-7.35c0-1.704-.475-3.017-1.462-3.976-.987-.958-2.229-1.42-3.8-1.42Zm11.584.178h-3.399v12.568h3.399V11.219Zm-1.683-1.314c.585 0 1.097-.177 1.462-.568.402-.355.585-.816.585-1.384s-.183-.994-.585-1.385c-.402-.355-.877-.568-1.462-.568-.584 0-1.096.178-1.461.568-.402.355-.585.817-.585 1.385 0 .568.183.994.585 1.384.402.39.877.568 1.461.568Zm-71.217 9.87c-.512.959-1.316 1.456-2.485 1.456-.804 0-1.498-.249-2.046-.746-.512-.461-.84-1.136-.914-1.953-.036-.177-.036-.355-.036-.355h9.39a7.19 7.19 0 0 0 .074-.923c0-1.207-.256-2.307-.804-3.266-.548-.958-1.316-1.668-2.266-2.201a7.226 7.226 0 0 0-3.288-.781c-1.28 0-2.412.284-3.399.78a5.6 5.6 0 0 0-2.302 2.273c-.548.994-.804 2.13-.804 3.408 0 1.279.293 2.415.84 3.409a5.598 5.598 0 0 0 2.303 2.272c.986.532 2.12.817 3.362.817 1.534 0 2.85-.391 3.91-1.172 1.06-.781 1.79-1.775 2.155-2.982l.037-.107h-3.654l-.073.071Zm-4.458-5.325c.511-.462 1.17-.675 1.936-.675.804 0 1.535.249 2.083.71.548.462.84 1.03.877 1.775h-5.846c.146-.78.438-1.384.95-1.81Z" fill="#fff"></path></svg>
            <div className={styles.licenseWrapper}><p className={styles.license}>Betnomi.com is operated by Nomi N.V.<br />
                (Registered address, Abraham de Veerstraat 9, Willemstad, Curacao). Licensed and regulated under the Master License number 365/JAZ.</p></div>
            <div className={styles.socials}>
                <a className={styles.social} target="_blank" rel="noreferrer" href="https://www.facebook.com/betnomiofficial"><FontIcon name={FontIconName.Facebook} /></a>
                <a className={styles.social} target="_blank" rel="noreferrer" href="https://www.instagram.com/betnomi"><FontIcon name={FontIconName.Instagram} /></a>
                <a className={styles.social} target="_blank" rel="noreferrer" href="https://discord.gg/Du29MfS4yq"><FontIcon name={FontIconName.Discord} /></a>
                <a className={styles.social} target="_blank" rel="noreferrer" href="https://twitter.com/betnomi"><FontIcon name={FontIconName.Twitter} /></a>
                <a className={styles.social} target="_blank" rel="noreferrer" href="https://t.me/betnomi"><FontIcon name={FontIconName.Telegram} /></a>
            </div>
            <span className={styles.copyright}>© 2023 Betnomi</span>
            <div className={styles.legal}>
                <span>
                    <img alt="" src="https://images.betnomi.com/82c34cc6-e155-483e-bef7-afd9b528d71c?auto=format&amp;fit=max&amp;w=128" decoding="async" data-nimg="fixed" />
                </span>
                <span>
                    <img alt="" src="https://images.betnomi.com/e6f3af6f-ff33-41e1-a6e4-9c8877fe2796?auto=format&amp;fit=max&amp;w=48" decoding="async" data-nimg="fixed" />
                </span>
                <div className={styles.seal}>
                    <img src="https://images.betnomi.com/2d6c733f-5cf6-4896-940e-7cf21175c53a?auto=format&fit=max&w=256&q=60" />
                </div>
            </div>

            <div className={styles.footer_bottom}>
                <div className={styles.btc_rates}>
                    <img
                        src={bitcoin}
                        alt="bitcoin"
                        width={16}
                        height={16}
                    />
                    {rates.BTC && (
                        <p>1 BTC = {formattedPrice(rates.BTC)}</p>
                    )}

                </div>
            </div>
        </footer>
    );
}
