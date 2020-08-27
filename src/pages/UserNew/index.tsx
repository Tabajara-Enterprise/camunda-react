import React from 'react';
import { Header } from '../../components/Header';
import { Container, Content } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Select } from '../../components/Select';

export const UserNew: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Novo usuário</h1>
        <Content>
          <form>
            <Input
              name="name"
              label="Nome"
              type="text"
              placeholder="Digite um nome"
            />
            <Input
              name="email"
              label="E-mail"
              type="email"
              placeholder="Digite um e-mail válido"
            />
            <Select
              name="group"
              label="Grupo de Permissão"
              options={[
                { value: 'ADM', label: 'Administrador' },
                { value: 'ADM', label: 'Administrador' },
                { value: 'ADM', label: 'Administrador' },
              ]}
            />
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: '15px',
              }}
            >
              <input
                style={{
                  marginRight: '10px',
                }}
                type="checkbox"
                id="active"
              />
              <label htmlFor="active">Ativo?</label>
            </div>
            <Button label="Salvar" />
          </form>
        </Content>
      </Container>
    </>
  );
};
