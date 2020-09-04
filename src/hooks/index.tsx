import React from 'react';
import { KeycloakProvider } from '@react-keycloak/web';
import keycloak from '../config/keycloak';
import { ModalProvider } from './modal';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <KeycloakProvider
    keycloak={keycloak}
    initConfig={{ onLoad: 'login-required' }}
  >
    <ToastProvider>
      <ModalProvider>{children}</ModalProvider>
    </ToastProvider>
  </KeycloakProvider>
);

export default AppProvider;
