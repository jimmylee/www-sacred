'use client';

import clsx from 'clsx';

import * as React from 'react';

const styles = {
  root: clsx("align-top inline-block font-normal text-center m-0 outline-0 border-0 font-[var(--font-family-mono)] w-full text-[var(--font-size)] leading-[calc(var(--theme-line-height-base)*2em)] min-h-[calc(var(--theme-line-height-base)*(var(--font-size)*2))] px-[2ch] py-0 uppercase tracking-[1px] transition-all duration-200 ease"),
  primary: clsx("bg-[var(--theme-button)] text-[var(--theme-button-text)] cursor-pointer hover:bg-[var(--theme-focused-foreground)] focus:bg-[var(--theme-focused-foreground)]"),
  secondary: clsx("bg-[var(--theme-background)] text-[var(--theme-text)] shadow-[inset_0_0_0_1px_var(--theme-border)] cursor-pointer hover:bg-[var(--theme-focused-foreground)] hover:shadow-[inset_0_0_0_1px_transparent] focus:bg-[var(--theme-focused-foreground)] focus:shadow-[inset_0_0_0_1px_transparent]"),
  disabled: clsx("bg-[var(--theme-button-background)] text-[var(--theme-button-foreground)] cursor-not-allowed")
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'PRIMARY' | 'SECONDARY';
  isDisabled?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ theme = 'PRIMARY', isDisabled, children, ...rest }) => {
  let buttonClasses = clsx(styles.root, styles.primary);

  if (theme === 'SECONDARY') {
    buttonClasses = clsx(styles.root, styles.secondary);
  }

  if (isDisabled) {
    buttonClasses = clsx(styles.root, styles.disabled);

    return <div className={buttonClasses}>{children}</div>;
  }

  return (
    <button className={buttonClasses} role="button" tabIndex={0} disabled={isDisabled} {...rest}>
      {children}
    </button>
  );
};

export default Button;
