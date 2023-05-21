import React from 'react';
import {
  about, help, regulations,
} from './constants';
import { FooterNavItem } from '../FooterNavItem';
import styles from './styles.module.scss';

export const FooterNav: React.FC = () => (
  <nav className={styles.nav}>
    <FooterNavItem label="About" items={about} />
    <FooterNavItem label="Help" items={help} />
    <FooterNavItem label="Regulations" items={regulations} />
  </nav>
);
