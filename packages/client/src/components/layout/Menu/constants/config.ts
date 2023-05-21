import { FontIconName } from '@betnomi/libs/components/FontIcon';
import { MenuItem, MenuItemType } from '../../../../types/ui/menu';

export const menuItems: MenuItem[] = [
  {
    type: MenuItemType.Link,
    options: {
      to: '/casino',
      label: 'Casino',
      icon: FontIconName.Casino,
    },
  },
  {
    type: MenuItemType.Link,
    options: {
      to: '/casino1',
      label: 'Live Casino',
      icon: FontIconName.LiveCasinoPlay,
    },
  },
  {
    type: MenuItemType.Link,
    options: {
      to: '/casino2',
      label: 'Games',
      icon: FontIconName.House,
    },
  },
  {
    type: MenuItemType.Link,
    options: {
      to: '/casino3',
      label: 'Live Sport',
      icon: FontIconName.LiveSports,
    },
  },
  {
    type: MenuItemType.Link,
    options: {
      to: '/casino4',
      label: 'Sports',
      icon: FontIconName.LiveSports,
    },
  },
  {
    type: MenuItemType.Link,
    options: {
      to: '/casino',
      label: 'E-Sport',
      icon: FontIconName.LiveSports,
    },
  },
  {
    type: MenuItemType.Link,
    options: {
      to: '/casino',
      label: 'Poker',
      icon: FontIconName.LiveSports,
    },
  },
  {
    type: MenuItemType.Line,
    options: {
      label: 'line1',
    },
  },
  // // NEXT GROUP
  // {
  //   type: MenuItemType.Link,
  //   options: {
  //     to: '/vip-lounge',
  //     label: 'VIP Lounge',
  //     icon: FontIconName.VIP,
  //   },
  // },
  // {
  //   type: MenuItemType.Link,
  //   options: {
  //     to: 'tournaments',
  //     label: 'Tournaments',
  //     icon: FontIconName.Tournaments,
  //   },
  // },
  // {
  //   type: MenuItemType.Link,
  //   options: {
  //     to: '/promotions',
  //     label: 'Promotions',
  //     icon: FontIconName.Promo,
  //   },
  // },
  {
    type: MenuItemType.Link,
    options: {
      to: '/affiliates',
      label: 'Affiliates',
      icon: FontIconName.Affiliates,
    },
  },
  {
    type: MenuItemType.Link,
    options: {
      to: '/support',
      label: 'Support',
      icon: FontIconName.Support,
    },
  },
];
