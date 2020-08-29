import React from 'react';
import { KeycloakProvider } from '@react-keycloak/web';
import keycloak from '../config/keycloak';
import { ModalProvider } from './modal';

const AppProvider: React.FC = ({ children }) => (
  <KeycloakProvider
    keycloak={keycloak}
    initConfig={{ onLoad: 'login-required' }}
  >
    <ModalProvider>{children}</ModalProvider>
  </KeycloakProvider>
);

export default AppProvider;
