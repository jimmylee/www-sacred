import * as React from 'react';
import clsx from 'clsx';

import ButtonGroup from '@components/ButtonGroup';

export interface ActionBarItem {
  hotkey?: string;
  onClick?: () => void;
  openHotkey?: string;
  selected?: boolean;
  body: React.ReactNode;
  items?: any;
}

export interface ActionBarProps {
  items: ActionBarItem[];
}

const styles = {
  root: "bg-[var(--theme-background)] shadow-[inset_0_0_0_1px_var(--theme-border)]"
};

export const ActionBar: React.FC<ActionBarProps> = ({ items }) => {
  return (
    <div className={styles.root}>
      <ButtonGroup items={items} />
    </div>
  );
};

export default ActionBar;
