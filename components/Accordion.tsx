'use client';

import * as React from 'react';
import clsx from 'clsx';

import Row from '@components/Row';

const styles = {
  flex: "flex items-center justify-between hover:bg-[var(--theme-focused-foreground)]",
  icon: "flex-shrink-0 select-none cursor-pointer",
  content: "min-w-[10%] w-full select-none cursor-pointer transition-[padding] duration-200 ease",
  active: "pl-[1ch]"
};

export interface AccordionProps {
  defaultValue?: boolean;
  title: string;
  children?: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ defaultValue = false, title, children }) => {
  const [show, setShow] = React.useState<boolean>(defaultValue);
  const accordionRef = React.useRef<HTMLDivElement | null>(null);

  const toggleShow = (): void => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <>
      <Row ref={accordionRef} tabIndex={0} role="button" onClick={toggleShow} aria-expanded={show}>
        <div className={clsx(styles.flex)}>
          <span className={styles.icon}>{show ? '▾' : '▸'}</span>
          <span className={clsx(styles.content, show && styles.active)}>{title}</span>
        </div>
      </Row>
      {show && <Row style={{ paddingLeft: '1ch' }}>{children}</Row>}
    </>
  );
};

export default Accordion;
