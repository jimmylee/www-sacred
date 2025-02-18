'use client';

import * as React from 'react';

const styles = {
  row: "block outline-0 border-0 transition-[background] duration-200 ease focus:bg-[var(--theme-focused-foreground)]"
};

type RowProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

const Row = React.forwardRef<HTMLElement, RowProps>(({ children, ...rest }, ref) => {
  return (
    <section className={styles.row} ref={ref} {...rest}>
      {children}
    </section>
  );
});

Row.displayName = 'Row';

export default Row;
