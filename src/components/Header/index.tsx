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
            <NavLink to="/deployments">DEPLOYMENTS</NavLink>
            <NavLink to="/tasks">TASKS</NavLink>
          </Navigation>
        </nav>
      </Content>
    </Container>
  );
};
