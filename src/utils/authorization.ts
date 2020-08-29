import { ReactElement } from 'react';
import { useKeycloak } from '@react-keycloak/web';

interface Props {
  roles: string[];
  children: ReactElement;
}

export const AuthorizedElement = ({ roles, children }: Props) => {
  const [keycloak] = useKeycloak();
  const isAuthorized = (): any => {
    if (keycloak && roles) {
      return roles.some((r: any) => {
        const realm = keycloak.hasRealmRole(r);
        const resource = keycloak.hasResourceRole(r);
        return realm || resource;
      });
    }
    return false;
  };
  return isAuthorized() && children;
};
