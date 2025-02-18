'use client';

import * as React from 'react';

const styles = {
  root: "border-0 outline-0 m-0 p-0 pl-[1ch] text-[var(--font-size)] flex-shrink-0 [-webkit-text-size-adjust:100%] transition-[background-color] duration-500 ease first:pl-0"
};

type TableColumnProps = React.HTMLAttributes<HTMLTableCellElement> & {
  children?: React.ReactNode;
};

const TableColumn: React.FC<TableColumnProps> = ({ children, ...rest }) => {
  return (
    <td className={styles.root} {...rest}>
      {children}
    </td>
  );
};

TableColumn.displayName = 'TableColumn';

export default TableColumn;
