'use client';

import * as React from 'react';

const styles = {
  root: "border-0 outline-0 m-0 p-0 transition-transform duration-500 ease border-spacing-0 [-webkit-text-size-adjust:100%] focus:bg-[var(--theme-focused-foreground)] focus:outline-0"
};

type TableRowProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

const TableRow = ({ children, ...rest }) => {
  return (
    <tr className={styles.root} tabIndex={0} {...rest}>
      {children}
    </tr>
  );
};

TableRow.displayName = 'TableRow';

export default TableRow;
