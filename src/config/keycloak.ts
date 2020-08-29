import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8084/auth',
  realm: 'PROZESS',
  clientId: 'prozess-app-fe',
};
const keycloak = Keycloak(keycloakConfig);
export default keycloak;
