'use client';

import * as React from 'react';

import { ModalProvider } from '@components/page/ModalContext';
import { ThemeProvider } from '@components/ThemeProvider';

export interface ProvidersProps {
  children: React.ReactNode;
  theme?: 'blue' | 'light' | 'dark' | 'green' | 'black-red' | 'black-teal' | 'black-green';
}

export const Providers: React.FC<ProvidersProps> = ({ children, theme = 'light' }) => {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
};

export default Providers;
