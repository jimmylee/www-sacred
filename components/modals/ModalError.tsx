'use client';

import * as React from 'react';
import clsx from 'clsx';
import * as Utilities from '@common/utilities';

import { useHotkeys } from '@modules/hotkeys';
import { useModals } from '@components/page/ModalContext';

import ActionButton from '@components/ActionButton';
import Button from '@components/Button';
import CardDouble from '@components/CardDouble';
import Grid from '@components/Grid';

const styles = {
  root: "animate-fadeIn bg-[var(--theme-background-modal)] shadow-[0_0_0_1ch_var(--theme-border-subdued)] block font-normal mx-auto max-w-[64ch] px-[2ch] py-[calc(var(--font-size)*var(--theme-line-height-base))] select-none w-full"
};

interface ModalErrorProps {
  buttonText?: string | any;
  message: string | any;
  title?: string;
}

// TODO(jimmylee)
// Enter doesn't always work for some reason.
function ModalError({ message, buttonText, title }: ModalErrorProps) {
  const { close } = useModals();

  useHotkeys('enter', () => close());

  return (
    <div className={clsx(styles.root)}>
      <CardDouble title={title}>
        <br />
        {message}
        <Grid>
          <ul>
            <li>
              Press{' '}
              <ActionButton hotkey="⏎" onClick={() => close()}>
                ENTER
              </ActionButton>{' '}
              to continue.
            </li>
          </ul>
        </Grid>
      </CardDouble>
    </div>
  );
}

export default ModalError;
