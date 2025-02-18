'use client';

import * as React from 'react';

const styles = {
  row: "flex justify-between outline-0 border-0 transition-[background] duration-200 ease focus:bg-[var(--theme-focused-foreground)]"
};

type RowSpaceBetweenProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

const RowSpaceBetween = React.forwardRef<HTMLElement, RowSpaceBetweenProps>(({ children, ...rest }, ref) => {
  return (
    <section className={styles.row} ref={ref} {...rest}>
      {children}
    </section>
  );
});

RowSpaceBetween.displayName = 'RowSpaceBetween';

export default RowSpaceBetween;
