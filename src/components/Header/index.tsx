import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

import { AuthorizedElement } from '../../utils/authorization';
import { Container, Content, Navigation, Profile } from './styles';
import logo from '../../assets/logo.svg';

interface UserInfo {
  name: string;
}

export const Header: React.FC = () => {
  const [keycloak, initialized] = useKeycloak();
  const [user, setUser] = useState<UserInfo>({} as UserInfo);
  function handleSingOut(): void {
    keycloak.logout();
  }
  useEffect(() => {
    async function loadUser(): Promise<void> {
      if (initialized) {
        const userInfo = await keycloak.loadUserInfo();
        setUser(userInfo as UserInfo);
      }
    }
    loadUser();
  }, [initialized, keycloak]);

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
            <strong>{user.name}</strong>
            <button type="button" onClick={handleSingOut}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};
