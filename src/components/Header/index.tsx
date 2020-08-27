import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Content, Navigation } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <nav>
          <Navigation>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/users">USUÁRIOS</NavLink>
            <NavLink to="/processes">SOLICITAÇÕES</NavLink>
            <NavLink to="/tasks">TAREFAS</NavLink>
          </Navigation>
        </nav>
      </Content>
    </Container>
  );
};
