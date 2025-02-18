'use client';

import * as React from 'react';
import clsx from 'clsx';

const styles = {
  root: clsx("inline-block w-[1ch] text-inherit h-[calc(var(--font-size)*var(--theme-line-height-base))] align-bottom")
};

const SEQUENCES = [
  ['⠁', '⠂', '⠄', '⡀', '⢀', '⠠', '⠐', '⠈'],
  ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'],
  ['▖', '▘', '▝', '▗'],
  ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█', '▇', '▆', '▅', '▄', '▃', '▁'],
  ['▉', '▊', '▋', '▌', '▍', '▎', '▏', '▎', '▍', '▌', '▋', '▊', '▉'],
  ['←', '↖', '↑', '↗', '→', '↘', '↓', '↙'],
  ['┤', '┘', '┴', '└', '├', '┌', '┬', '┐'],
  ['◢', '◣', '◤', '◥'],
  ['◰', '◳', '◲', '◱'],
  ['◴', '◷', '◶', '◵'],
  ['◐', '◓', '◑', '◒'],
];

export interface BlockLoaderProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  mode?: number;
}

export const BlockLoader: React.FC<BlockLoaderProps> = ({ mode = 0 }) => {
  if (!SEQUENCES[mode]) {
    return <span className={styles.root}>�</span>;
  }

  const [index, setIndex] = React.useState(0);
  const intervalRef = React.useRef<number | null>(null);
  const indexLength = SEQUENCES[mode].length;

  React.useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % indexLength);
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [indexLength]);

  return <span className={styles.root}>{SEQUENCES[mode][index]}</span>;
};

export default BlockLoader;
