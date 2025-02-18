import * as React from 'react';

import Block from '@components/Block';
import Button from '@components/Button';

const styles = {
  root: "block bg-[var(--theme-border)] shadow-[1ch_1ch_0_0_var(--theme-border-subdued)] font-normal max-w-[56ch] min-w-[24ch] m-0 p-0",
  header: "block bg-[var(--theme-text)] text-[var(--theme-background)] text-center m-0 p-0",
  message: "block m-0 text-center px-[2ch]",
  actions: "flex justify-between items-center max-w-[24ch] mx-auto px-[2ch]"
};

interface DialogProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const Dialog: React.FC<DialogProps> = ({ title, children, style, onConfirm, onCancel }) => {
  const titleId = React.useId();
  const descId = React.useId();

  return (
    <div className={styles.root} style={style} role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descId}>
      <header className={styles.header}>{title}</header>
      <br />
      <article className={styles.message} id={descId}>
        {children}
      </article>
      <br />
      <div className={styles.actions}>
        <Button theme="SECONDARY" onClick={onConfirm}>
          OK
        </Button>
        <Block style={{ opacity: 0 }} />
        <Button theme="SECONDARY" onClick={onCancel}>
          Cancel
        </Button>
      </div>
      <br />
    </div>
  );
};

export default Dialog;
