import React from 'react';
import { Container } from './styles';
import { DeployProcess } from '../../components/Camunda/DeployProcess';

export const Deployments: React.FC = () => {
  return (
    <Container>
      <h1>Adicionar processo</h1>
      <DeployProcess />
    </Container>
  );
};
