'use client';

import * as React from 'react';
import * as Utilities from '@common/utilities';

const styles = {
  root: "block font-normal overflow-auto font-inherit bg-[var(--theme-border-subdued)] scrollbar-none",
  line: "flex justify-between items-start",
  number: "inline-flex w-[3ch] text-right pr-[1ch] select-none bg-[var(--theme-background)] opacity-50",
  content: "min-w-[10%] w-full whitespace-pre bg-[var(--theme-border-subdued)] pl-[2ch]"
};

export interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

export const CodeBlock = React.forwardRef<HTMLPreElement, CodeBlockProps>(({ children, ...rest }, ref) => {
  return (
    <pre className={styles.root} ref={ref} {...rest}>
      {String(children)
        .split('\n')
        .map((line, index) => (
          <div key={index} className={styles.line}>
            <span className={styles.number}>{Utilities.leftPad(String(index + 1), 3)}</span>
            <span className={styles.content}>{line}</span>
          </div>
        ))}
    </pre>
  );
});

CodeBlock.displayName = 'CodeBlock';

export default CodeBlock;
