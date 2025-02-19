'use client';

import * as React from 'react';

const styles = {
  root: "!flex items-center justify-between bg-[var(--theme-border)]",
  logo: "flex-shrink-0 px-[1ch] inline-flex text-[var(--theme-text)] bg-[var(--theme-border)] no-underline border-0 outline-0 rounded-0 m-0 text-[var(--font-size)] visited:text-[var(--theme-text)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-focused-foreground)] focus:outline-0 focus:border-0 focus:m-0 focus:px-[1ch] focus:bg-[var(--theme-focused-foreground)]",
  left: "flex-shrink-0",
  children: "min-w-[10%] w-full",
  right: "flex-shrink-0"
};

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  logoHref?: string;
  logoTarget?: React.HTMLAttributeAnchorTarget;
  onClickLogo?: React.MouseEventHandler<HTMLButtonElement>;
  logo?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Navigation: React.FC<NavigationProps> = ({ children, logoHref, logoTarget, onClickLogo, logo, left, right }) => {
  let logoElement = <button className={styles.logo}>{logo}</button>;

  if (onClickLogo) {
    logoElement = (
      <button className={styles.logo} onClick={onClickLogo}>
        {logo}
      </button>
    );
  }

  if (logoHref) {
    logoElement = (
      <a href={logoHref} className={styles.logo} target={logoTarget}>
        {logo}
      </a>
    );
  }

  return (
    <nav className={styles.root}>
      {logoElement}
      <section className={styles.left}>{left}</section>
      <section className={styles.children}>{children}</section>
      <section className={styles.right}>{right}</section>
    </nav>
  );
};

export default Navigation;
