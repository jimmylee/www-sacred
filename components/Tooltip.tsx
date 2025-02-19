import * as React from 'react';

const styles = {
  root: "block bg-[var(--theme-border)] shadow-[0.5ch_0.5ch_0_0_var(--theme-border-subdued)] font-normal max-w-[24ch]"
};

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(({ style: propStyle, ...rest }, ref) => {
  const style: React.CSSProperties = { ...propStyle };

  return <div ref={ref} className={styles.root} {...rest} style={style} />;
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
