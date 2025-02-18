import * as React from 'react';

const styles = {
  root: "block bg-[var(--theme-border)] shadow-[0_0_0_1ch_var(--theme-border-subdued)] px-[2ch] py-[calc(var(--font-size)*var(--theme-line-height-base))] font-normal"
};

interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(({ style: propStyle, ...rest }, ref) => {
  const style: React.CSSProperties = { ...propStyle };

  return <div ref={ref} className={styles.root} {...rest} style={style} />;
});

Popover.displayName = 'Popover';

export default Popover;
