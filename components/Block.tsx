import * as React from 'react';
import clsx from 'clsx';

const styles = {
  block: clsx("inline-block w-[1ch] bg-[var(--theme-text)] h-[calc(var(--font-size)*var(--theme-line-height-base))] align-bottom flex-shrink-0")
};

interface BlockProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({ children, ...rest }) => {
  return (
    <span className={styles.block} {...rest}>
      {children}
    </span>
  );
};

export default Block;
