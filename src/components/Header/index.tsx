import React from 'react';
import { NavLink } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

import { AuthorizedElement } from '../../utils/authorization';
import { Container, Content, Navigation, LogoutContainer } from './styles';

export const Header: React.FC = () => {
  const [keycloak] = useKeycloak();
  function logout(): void {
    keycloak.logout();
  }
  return (
    <Container>
      <Content>
        <nav>
          <Navigation>
            <NavLink to="/">HOME</NavLink>
            <AuthorizedElement roles={['ADMINISTRATOR']}>
              <NavLink to="/users">USUÁRIOS</NavLink>
            </AuthorizedElement>
            <NavLink to="/solicitations">SOLICITAÇÕES</NavLink>
            <NavLink to="/tasks">TAREFAS</NavLink>
          </Navigation>
        </nav>
        <LogoutContainer>
          <button type="button" onClick={logout}>
            logout
          </button>
        </LogoutContainer>
      </Content>
    </Container>
  );
};
