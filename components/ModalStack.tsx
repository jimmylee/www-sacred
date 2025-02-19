'use client';

import * as React from 'react';
import clsx from 'clsx';

import { useModals } from '@components/page/ModalContext';

const styles = {
  root: "items-center bottom-0 flex justify-center left-0 pointer-events-none fixed right-0 top-0 z-[var(--z-index-page-modals)]",
  item: "pointer-events-auto absolute transition-[opacity,transform] duration-[0.2s,0.4s] ease-[ease,ease]"
};

export interface ModalStackProps {}

export const ModalStack: React.FC<ModalStackProps> = () => {
  const { modalStack } = useModals();

  const totalModals = modalStack.length;

  return (
    <div className={clsx(styles.root)}>
      {modalStack.map((modalState, index) => {
        const { key, component: ModalComponent, props } = modalState;

        const offsetFromLast = totalModals - 1 - index;
        const translateY = -offsetFromLast * 40;
        const blur = offsetFromLast * 1.1;

        return (
          <div
            key={key}
            className={clsx(styles.item)}
            style={{
              zIndex: 10 + index,
              transform: `translateY(${translateY}px)`,
              filter: `blur(${blur}px)`,
            }}
          >
            <ModalComponent {...props} />
          </div>
        );
      })}
    </div>
  );
};

export default ModalStack;
