'use client';

import clsx from 'clsx';
import * as React from 'react';

const styles = {
  root: "flex items-start justify-between whitespace-pre-wrap",
  sidebar: "self-stretch flex-shrink-0 w-[20ch]",
  handle: "self-stretch flex-shrink-0 flex items-center justify-center w-[3ch] outline-0 border-0 cursor-col-resize group focus:outline-0 focus:border-0",
  line: "self-stretch w-[2px] bg-[var(--theme-text)] first-of-type:ml-[1px] first-of-type:mr-[2px] group-hover:bg-[var(--theme-focused-foreground)] group-focus:bg-[var(--theme-focused-foreground)]",
  content: "min-w-[10%] w-full"
};

export interface SidebarLayoutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  defaultSidebarWidth?: number;
  isShowingHandle?: boolean;
  isReversed?: boolean;
}

const LINE_HEIGHT = 20;
const CHARACTER_WIDTH = 9.6;

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({ defaultSidebarWidth = 20, children, sidebar, isShowingHandle = false, isReversed = false, ...rest }) => {
  const [sidebarWidth, setSidebarWidth] = React.useState(defaultSidebarWidth);
  const handleRef = React.useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const startX = event.clientX;
    const startWidth = sidebarWidth;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const increment = Math.round(deltaX / CHARACTER_WIDTH);
      setSidebarWidth(Math.max(CHARACTER_WIDTH, startWidth + increment));
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  if (isReversed) {
    return (
      <div className={clsx(styles.root)} {...rest}>
        <div className={styles.content}>{children}</div>
        &nbsp;
        <div
          className={styles.sidebar}
          style={{
            width: `${sidebarWidth}ch`,
          }}
        >
          {sidebar}
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(styles.root)} {...rest}>
      <div
        className={styles.sidebar}
        style={{
          width: `${sidebarWidth}ch`,
        }}
      >
        {sidebar}
      </div>
      {isShowingHandle ? (
        <div className={styles.handle} ref={handleRef} role="button" tabIndex={0} onMouseDown={handleMouseDown} style={isShowingHandle ? {} : { width: `0.5ch` }}>
          <>
            <div className={styles.line} />
            <div className={styles.line} />
          </>
        </div>
      ) : null}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default SidebarLayout;
