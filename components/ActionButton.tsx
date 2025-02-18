import * as React from 'react';
import clsx from 'clsx';

import * as Utilities from '@common/utilities';

export interface ActionButtonProps {
  onClick?: () => void;
  hotkey?: any;
  children?: React.ReactNode;
  style?: any;
  rootStyle?: any;
  isSelected?: boolean;
}

const styles = {
  root: "inline-flex items-center justify-between cursor-pointer outline-0 border-0 m-0 p-0 box-border font-[var(--font-family-mono)] text-[var(--font-size)] flex-shrink-0",
  hotkey: "bg-[var(--theme-button-foreground)] text-[var(--theme-text)] cursor-pointer flex-shrink-0 font-normal px-[1ch] text-indent-0 select-none group-hover:bg-[var(--theme-focused-foreground)] group-focus:bg-[var(--theme-focused-foreground)]",
  content: "bg-[var(--theme-button-background)] shadow-[inset_0_0_0_2px_var(--theme-button-foreground)] cursor-pointer flex-shrink-0 font-normal px-[1ch] text-indent-0 uppercase select-none group-hover:shadow-[inset_0_0_0_2px_var(--theme-focused-foreground)] group-focus:shadow-[inset_0_0_0_2px_var(--theme-focused-foreground)]",
  selected: "bg-[var(--theme-focused-foreground)]"
};

export const ActionButton = React.forwardRef<HTMLDivElement, ActionButtonProps>(({ onClick, hotkey, children, style, rootStyle, isSelected }, ref) => {
  return (
    <div className={clsx(styles.root, 'group', isSelected && styles.selected)} style={rootStyle} onClick={onClick} tabIndex={0} ref={ref} role="button">
      {Utilities.isEmpty(hotkey) ? null : <span className={styles.hotkey}>{hotkey}</span>}
      <span className={clsx(styles.content, isSelected && styles.selected)} style={style}>
        {children}
      </span>
    </div>
  );
});

ActionButton.displayName = 'ActionButton';

export default ActionButton;
