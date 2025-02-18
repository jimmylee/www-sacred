import * as React from 'react';

const styles = {
  grid: "block px-[2ch] py-[calc(var(--font-size)*var(--theme-line-height-base))]"
};

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children, ...rest }) => {
  return (
    <div className={styles.grid} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
