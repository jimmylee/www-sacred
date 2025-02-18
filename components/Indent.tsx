import * as React from 'react';

const styles = {
  root: "block pl-[1ch]"
};

interface IndentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Indent: React.FC<IndentProps> = ({ children, ...rest }) => {
  return (
    <div className={styles.root} {...rest}>
      {children}
    </div>
  );
};

export default Indent;
