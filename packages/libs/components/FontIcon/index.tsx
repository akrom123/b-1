import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss'

interface IProps {
  name: string;
  size?: 'l' | 'm' | 'm2' | 's' | 'xs' | 'xxs';
  className?: string;
  onClick?: () => void;
}

export enum FontIconName {
  Facebook = 'icon-facebook',
  Instagram = 'icon-instagram',
  Chat = 'icon-chat',
  Twitter = 'icon-twitter',
  Discord = 'icon-discord',
  Menu = 'icon-menu',
  MobileMenu = 'icon-mobilemenu',
  Notify = 'icon-notify',
  Telegram = 'icon-telegram',
  IconArrowBottom = 'icon-arrow-bottom-1',
  User = 'icon-user',
  Wallet = 'icon-wallet',
  Wallet1 = 'icon-wallet-1',
  Deposit = 'icon-deposit',
  Withdraw = 'icon-withdraw',
  Transactions = 'icon-transactions',
  VIP = 'icon-vip',
  Promo = 'icon-promo',
  Settings = 'icon-settings',
  Logout = 'icon-logout',
  Live = 'icon-live',
  AllGames = 'icon-livegames',
  Flag = 'icon-flag',
  Odds = 'icon-odds',
  Slots = 'icon-slots',
  Poker = 'icon-poker',
  House = 'icon-housegame',
  Virtuals = 'icon-virtuals',
  Tournaments = 'icon-tournaments',
  Affiliates = 'icon-affiliates',
  Support = 'icon-support',
  Light = 'icon-light',
  Dark = 'icon-dark',
  GIF = 'icon-gif',
  Water = 'icon-water',
  Bitcoin = 'icon-bitcoin',
  Smile = 'icon-smile',
  Attachments = 'icon-attachments',
  World = 'icon-world',
  Users = 'icon-users-wm-1',
  Close = 'icon-close',
  ChevronDown = 'icon-arrow-bottom-1',
  View = 'icon-view',
  Lock = 'icon-lock',
  Google = 'icon-google',
  ArrowRight = 'icon-arrow-right',
  ArrowLeftBold = 'icon-arrow-left-bold',
  ArrowRightBold = 'icon-arrow-right-bold',
  Featured = 'icon-featured',
  Football = 'icon-football',
  Tennis = 'icon-tennis',
  Volleyball = 'icon-volleyball',
  Baseball = 'icon-baseball',
  IceHockey = 'icon-ice-hockey',
  Handball = 'icon-handball',
  Cricket = 'icon-cricket',
  MMA = 'icon-mma',
  Snooker = 'icon-snooker',
  WaterPolo = 'icon-water-polo',
  Darts = 'icon-darts',
  Golf = 'icon-golf',
  FormulaOne = 'icon-formula-one',
  Cycling = 'icon-cycling',
  Chess = 'icon-chess',
  Netball = 'icon-netball',
  Email = 'icon-email',
  Checked = 'icon-checked',
  Casino = 'icon-casino',
  LiveCasinoPlay = 'icon-live-casino',
  OddsNew = 'icon-odds-new',
  Roulette = 'icon-roulette',
  Deleted = 'icon-deleted',
  Plus = 'icon-plus',
  CashOut = 'icon-cashout',
  Lost = 'icon-lost',
  Returned = 'icon-returned',
  Unsettled = 'icon-unsettled',
  Copy = 'icon-copy',
  Info = 'icon-info',
  Calendar = 'icon-calendar',
  Home = 'icon-home',
  LiveSports = 'icon-live-sports',
  Popular = 'icon-popular',
  New = 'icon-new',
  Bonus = 'icon-bonus',
  Baccarat1 = 'icon-baccarat-1',
  Blackjack = 'icon-blackjack',
  Gameshow = 'icon-gameshow',
  All = 'icon-all',
  Trophy = 'icon-trophy',
  Search = 'icon-search',
  Filter = 'icon-filter',
  Play = 'icon-play',
  PlaySecondary = 'icon-play-secondary',

}

const FontIcon: FC<IProps> = ({ name, size, className, onClick }) => (
  <i
    onClick={onClick}
    className={classNames(name, className, styles.fontIcon, {
      [styles.fontIconSizeL]: size === 'l',
      [styles.fontIconSizeM]: size === 'm',
      [styles.fontIconSizeM2]: size === 'm2',
      [styles.fontIconSizeS]: size === 's',
      [styles.fontIconSizeXS]: size === 'xs',
      [styles.fontIconSizeXXS]: size === 'xxs',
    })}
  />
);

export { FontIcon };
