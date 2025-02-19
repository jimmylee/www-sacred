'use client';

import * as React from 'react';
import clsx from 'clsx';

const styles = {
  root: clsx("inline-block align-top text-center font-normal m-0 outline-0 border-0 font-[var(--font-family-mono)] min-h-[calc(var(--theme-line-height-base)*var(--font-size))] uppercase transition-all duration-200 ease bg-[var(--theme-border)] px-[1ch] py-0")
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children, ...rest }) => {
  return (
    <span className={styles.root} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
