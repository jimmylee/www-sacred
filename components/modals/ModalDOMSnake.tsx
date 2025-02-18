'use client';

import * as React from 'react';
import clsx from 'clsx';
import * as Utilities from '@common/utilities';

import { useModals } from '@components/page/ModalContext';

import Button from '@components/Button';
import Card from '@components/Card';
import DOMSnake from '@components/DOMSnake';

const styles = {
  root: "animate-fadeIn bg-[var(--theme-background-modal)] shadow-[0_0_0_1ch_var(--theme-border-subdued)] block font-normal mx-auto max-w-[64ch] px-[2ch] py-[calc(var(--font-size)*var(--theme-line-height-base))] select-none w-full"
};

export interface ModalDOMSnakeProps {
  buttonText?: string | any;
}

export function ModalDOMSnake({ buttonText }: ModalDOMSnakeProps) {
  const { close } = useModals();

  return (
    <div className={clsx(styles.root)}>
      <Card title="DOM SNAKE">
        <DOMSnake height={14} width={34} />
        <br />
        <br />
        <Button onClick={() => close()}>{Utilities.isEmpty(buttonText) ? 'Close' : buttonText}</Button>
      </Card>
    </div>
  );
}

export default ModalDOMSnake;
