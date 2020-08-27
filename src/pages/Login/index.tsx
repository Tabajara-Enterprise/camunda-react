import React from 'react';

import { Container, Content } from './styles';

export const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>POC-Camunda</h1>
        <form>
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua senha" />
          <button type="submit">Entrar</button>
        </form>
      </Content>
    </Container>
  );
};
