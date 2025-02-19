import * as React from 'react';

const styles = {
  root: "block min-w-[10%] w-full self-stretch"
};

export interface ContentFluidProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

export const ContentFluid: React.FC<ContentFluidProps> = ({ children, ...rest }) => {
  return <div className={styles.root}>{children}</div>;
};

export default ContentFluid;
