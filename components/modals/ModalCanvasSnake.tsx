'use client';

import * as React from 'react';
import clsx from 'clsx';

import * as Utilities from '@common/utilities';
import { useModals } from '@components/page/ModalContext';
import Button from '@components/Button';
import CanvasSnake from '@components/CanvasSnake';
import Card from '@components/Card';

const styles = {
  root: "animate-fadeIn bg-[var(--theme-background-modal)] shadow-[0_0_0_1ch_var(--theme-border-subdued)] block font-normal mx-auto max-w-[64ch] px-[2ch] py-[calc(var(--font-size)*var(--theme-line-height-base))] select-none w-full"
};

interface ModalCanvasSnakeProps {
  buttonText?: string | any;
}

function ModalCanvasSnake({ buttonText }: ModalCanvasSnakeProps) {
  const { close } = useModals();

  return (
    <div className={clsx(styles.root)}>
      <Card title="CANVAS SNAKE">
        <CanvasSnake rows={12} />
        <br />
        <br />
        <Button onClick={() => close()}>{Utilities.isEmpty(buttonText) ? 'Close' : buttonText}</Button>
      </Card>
    </div>
  );
}

export default ModalCanvasSnake;
