import React from 'react';
import { NavLink } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

import { AuthorizedElement } from '../../utils/authorization';
import { Container, Content, Navigation, Profile } from './styles';
import logo from '../../assets/logo.svg';

export const Header: React.FC = () => {
  const [keycloak] = useKeycloak();
  function handleSingOut(): void {
    keycloak.logout();
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo Prozess" />
          <Navigation>
            <NavLink to="/dashboard">HOME</NavLink>
            <AuthorizedElement roles={['ADMINISTRATOR']}>
              <NavLink to="/users">USUÁRIOS</NavLink>
            </AuthorizedElement>
            <NavLink to="/solicitations">SOLICITAÇÕES</NavLink>
            <NavLink to="/tasks">TAREFAS</NavLink>
          </Navigation>
        </nav>
        <aside>
          <Profile>
            <strong>Usuário logado</strong>
            <button type="button" onClick={handleSingOut}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};
