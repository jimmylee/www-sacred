'use client';

import * as React from 'react';

const styles = {
  root: "self-stretch flex items-start justify-between",
  side: "animate-fadeInLeft min-w-[22ch] w-full self-stretch origin-left",
  right: "flex-shrink-0 self-stretch bg-[var(--theme-background-input)] flex items-center w-[3ch]",
  action: "inline-flex h-[calc(var(--font-size)*var(--theme-line-height-base))] text-[var(--font-size)] select-none cursor-pointer text-[var(--theme-text)] bg-[var(--theme-button-foreground)] flex-shrink-0 items-center justify-center border-0 outline-0 m-0 p-0 w-full focus:border-0 focus:outline-0 focus:bg-[var(--theme-focused-foreground)]"
};

interface DrawerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  children?: React.ReactNode;
  defaultValue?: boolean;
}

const Drawer: React.FC<DrawerProps> = ({ children, defaultValue = false, ...rest }) => {
  const [expand, setExpand] = React.useState<boolean>(defaultValue);

  return (
    <div className={styles.root} {...rest}>
      {expand ? <div className={styles.side}>{children}</div> : null}
      <div className={styles.right}>
        <button className={styles.action} onClick={() => setExpand(!expand)}>
          {expand ? '⭠' : '⭢'}
        </button>
      </div>
    </div>
  );
};

export default Drawer;
