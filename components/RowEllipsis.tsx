'use client';

import * as React from 'react';

const styles = {
  row: "block outline-0 border-0 transition-[background] duration-200 ease whitespace-nowrap overflow-hidden text-ellipsis focus:bg-[var(--theme-focused-foreground)]"
};

export type RowEllipsisProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

export const RowEllipsis = React.forwardRef<HTMLElement, RowEllipsisProps>(({ children, ...rest }, ref) => {
  return (
    <section className={styles.row} ref={ref} {...rest}>
      {children}
    </section>
  );
});

RowEllipsis.displayName = 'RowEllipsis';

export default RowEllipsis;
