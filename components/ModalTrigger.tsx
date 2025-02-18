'use client';

import * as React from 'react';

import { useModals } from '@components/page/ModalContext';

export interface ModalTriggerProps {
  children: React.ReactElement<{ onClick?: React.MouseEventHandler }>;
  modal: React.ComponentType<any>;
  modalProps?: Record<string, any>;
}

export function ModalTrigger({ children, modal, modalProps = {} }: ModalTriggerProps) {
  const { open } = useModals();

  const onHandleOpenModal = () => {
    open(modal, modalProps);
  };

  return React.cloneElement(children, {
    onClick: onHandleOpenModal,
  });
}

export default ModalTrigger;
