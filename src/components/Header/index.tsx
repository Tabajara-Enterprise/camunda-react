import React from 'react';
import { NavLink } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
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
            <NavLink to="/users">USUÁRIOS</NavLink>
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
