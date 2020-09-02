import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route,
  Redirect,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
  roles: string[];
}

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  roles,
  ...rest
}) => {
  const [keycloak] = useKeycloak();

  const isAutherized = (roless: string[]): boolean => {
    if (keycloak && roless) {
      return roless.some(r => {
        const realm = keycloak.hasRealmRole(r);
        const resource = keycloak.hasResourceRole(r);
        return realm || resource;
      });
    }
    return false;
  };

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAutherized(roles) ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: '/dashboard', state: { from: location } }}
          />
        );
      }}
    />
  );
};
export default PrivateRoute;
