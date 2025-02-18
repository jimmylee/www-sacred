'use client';

import * as React from 'react';

const styles = {
  root: "border-0 outline-0 m-0 p-0 relative w-full border-spacing-0 [-webkit-text-size-adjust:100%]",
  body: ""
};

type TableProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

const Table = ({ children, ...rest }) => {
  return (
    <table className={styles.root} {...rest}>
      <tbody className={styles.body}>{children}</tbody>
    </table>
  );
};

Table.displayName = 'Table';

export default Table;
