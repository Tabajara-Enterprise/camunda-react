import React from 'react';
import { KeycloakProvider } from '@react-keycloak/web';
import keycloak from '../config/keycloak';

const AppProvider: React.FC = ({ children }) => (
  <KeycloakProvider
    keycloak={keycloak}
    initConfig={{ onLoad: 'login-required' }}
  >
    {children}
  </KeycloakProvider>
);

export default AppProvider;
