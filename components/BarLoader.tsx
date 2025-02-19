'use client';

import * as React from 'react';
import clsx from 'clsx';

const styles = {
  root: clsx("bg-[var(--theme-border)] h-[calc(var(--font-size)*var(--theme-line-height-base))] whitespace-nowrap text-left align-bottom block"),
  bar: clsx("bg-[linear-gradient(to_right,transparent,var(--theme-text))] h-full w-0 transition-[width] duration-100 linear")
};

export interface BarLoaderProps {
  intervalRate?: number;
  progress?: number;
}

export const BarLoader: React.FC<BarLoaderProps> = ({ intervalRate, progress }) => {
  const [currentProgress, setCurrentProgress] = React.useState<number>(progress || 0);

  React.useEffect(() => {
    if (progress !== undefined) {
      setCurrentProgress(progress);
      return;
    }

    if (!intervalRate) return;

    const interval = setInterval(() => {
      setCurrentProgress((prev) => (prev + 10) % 110);
    }, intervalRate);

    return () => clearInterval(interval);
  }, [intervalRate, progress]);

  return (
    <div className={styles.root}>
      <div
        className={styles.bar}
        style={{
          width: `${Math.min(currentProgress, 100)}%`,
        }}
      ></div>
    </div>
  );
};

export default BarLoader;
