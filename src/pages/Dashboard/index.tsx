import React from 'react';

import { Container, Card, CardList } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Dashboard</h1>
        <CardList>
          <Card>
            <strong>Solicitações abertas</strong>
            <span>32</span>
          </Card>
          <Card>
            <strong>Tarefas em andamento</strong>
            <span>123</span>
          </Card>
        </CardList>
      </Container>
    </>
  );
};
