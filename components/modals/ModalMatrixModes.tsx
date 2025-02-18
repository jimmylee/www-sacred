'use client';

import * as React from 'react';
import clsx from 'clsx';
import * as Utilities from '@common/utilities';

import { useModals } from '@components/page/ModalContext';

import Button from '@components/Button';
import Card from '@components/Card';
import MatrixLoader from '@components/MatrixLoader';

const styles = {
  root: "animate-fadeIn bg-[var(--theme-background-modal)] shadow-[0_0_0_1ch_var(--theme-border-subdued)] block font-normal mx-auto max-w-[64ch] px-[2ch] py-[calc(var(--font-size)*var(--theme-line-height-base))] select-none w-full"
};

export interface ModalMatrixModesProps {
  buttonText?: string | any;
}

export function ModalMatrixModes({ buttonText }: ModalMatrixModesProps) {
  const { close } = useModals();

  return (
    <div className={clsx(styles.root)}>
      <Card title="MATRIX MODES">
        <Card title="KATAKANA DEFAULT">
          <MatrixLoader rows={32} mode="katakana" />
        </Card>
        <Card title="GREEK LTR">
          <MatrixLoader direction="left-to-right" rows={8} mode="greek" />
        </Card>
        <br />
        <br />
        <Button onClick={() => close()}>{Utilities.isEmpty(buttonText) ? 'Close' : buttonText}</Button>
      </Card>
    </div>
  );
}

export default ModalMatrixModes;
