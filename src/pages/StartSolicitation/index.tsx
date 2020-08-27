import React from 'react';
import { Header } from '../../components/Header';
import { Container, Content } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button/styles';

export const StartSolicitation: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Iniciar Processo X</h1>
        <Content>
          <form>
            <Input
              name="var1"
              label="Variavel 1"
              placeholder="Informe a variavel 1"
            />
            <Input
              name="var2"
              label="Variavel 2"
              placeholder="Informe a variavel 2"
            />
            <Button>Iniciar processo</Button>
          </form>
        </Content>
      </Container>
    </>
  );
};
