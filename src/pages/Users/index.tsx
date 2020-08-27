import React from 'react';

import { Container } from './styles';
import { Header } from '../../components/Header';

export const Users: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Usuários</h1>
      </Container>
    </>
  );
};
