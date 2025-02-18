import * as React from 'react';

const styles = {
  gradient: "bg-[linear-gradient(to_right,transparent,var(--theme-border),transparent)] h-[calc(var(--font-size)*var(--theme-line-height-base))] w-full",
  divider: "flex items-center border-0 flex-col flex-shrink-0 h-[calc(var(--font-size)*var(--theme-line-height-base))] justify-center outline-0 w-full",
  line: "bg-[var(--theme-text)] block flex-shrink-0 h-[2px] w-full"
};

export interface DividerProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  type?: string | any;
  style?: any;
}

export const Divider: React.FC<DividerProps> = ({ children, style, type }) => {
  if (type === 'GRADIENT') {
    return <div className={styles.gradient} style={style} />;
  }

  if (type === 'DOUBLE') {
    return (
      <div className={styles.divider} style={style}>
        <div className={styles.line} style={{ marginBottom: `2px` }} />
        <div className={styles.line} />
      </div>
    );
  }

  return (
    <div className={styles.divider} style={style}>
      <div className={styles.line} />
    </div>
  );
};

export default Divider;
