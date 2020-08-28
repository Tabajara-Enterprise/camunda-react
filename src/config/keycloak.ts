import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://localhost:8084/auth',
  realm: 'tabajara',
  clientId: 'prozess-client-react',
};
const keycloak = Keycloak(keycloakConfig);
export default keycloak;
