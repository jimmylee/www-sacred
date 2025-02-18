'use client';

import clsx from 'clsx';
import * as React from 'react';

import { useModals } from '@components/page/ModalContext';

import Button from '@components/Button';
import CardDouble from '@components/CardDouble';
import Checkbox from '@components/Checkbox';
import Input from '@components/Input';
import RadioButtonGroup from '@components/RadioButtonGroup';

const styles = {
  root: "animate-fadeIn bg-[var(--theme-background-modal)] shadow-[0_0_0_1ch_var(--theme-border-subdued)] block font-normal mx-auto max-w-[64ch] px-[2ch] py-[calc(var(--font-size)*var(--theme-line-height-base))] select-none w-full"
};

function ModalCreateAccount() {
  const { close } = useModals();

  return (
    <div className={clsx(styles.root)}>
      <CardDouble title="NEW ACCOUNT">
        Create a new MakeBelieve™ account, where anything is possible at your command line in the browser.
        <br />
        <br />
        <RadioButtonGroup
          defaultValue="modal_developer"
          options={[
            { value: 'modal_individual', label: 'I’m using this for personal use.' },
            { value: 'modal_developer', label: 'I’m building or creating something for work.' },
            { value: 'modal_company', label: 'We’re using this as a team or organization.' },
          ]}
        />
        <br />
        <Input autoComplete="off" label="USERNAME" placeholder="Choose a username (e.g., SurfGirl29)" name="modal_username" />
        <Input autoComplete="off" label="PASSWORD" placeholder="Create a password (8+ characters)" type="password" name="modal_password" />
        <Input autoComplete="off" label="CONFIRM" placeholder="Type it again" type="password" name="modal_confirm" />
        <br />
        <Checkbox name="modal_terms">I agree to the Terms of Service, Data Privacy Policy, and Acceptable Use Guidelines.</Checkbox>
        <Checkbox name="modal_goodwill">I agree not to use this service for unlawful purposes.</Checkbox>
        <br />
        <Button onClick={() => close()}>Create an account</Button>
      </CardDouble>
    </div>
  );
}

export default ModalCreateAccount;
