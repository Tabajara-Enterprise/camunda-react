import React, { useEffect, useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import api from '../../services/api';

import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content } from './styles';

interface Role {
  name: string;
  description: string;
}
interface RoleOptions {
  label: string;
  value: string;
}
interface UserFormData {
  email: string;
  firstName: string;
  lastName: string;
  roles: Role[];
  username: string;
}

export const UserNew: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [roles, setRoles] = useState<RoleOptions[]>();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  useEffect(() => {
    api.get<Role[]>('/v1/roles').then(response => {
      const rolesOptions: RoleOptions[] = response.data.map(role => ({
        label: role.name,
        value: role.name,
      }));
      setRoles(rolesOptions);
    });
  }, []);

  const handleSubmit = useCallback(
    async (data: UserFormData) => {
      setIsLoading(true);
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          username: Yup.string().required('Nome de usuário é obrigatório'),
          firstName: Yup.string().required('Nome é obrigatório'),
        });
        await schema.validate(data, { abortEarly: false });

        await api.post('/v1/users', {
          ...data,
          password: '123456',
        });
        history.push('/users');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
        setIsLoading(false);
      }
    },
    [history],
  );

  return (
    <>
      <Container>
        <h1>Novo usuário</h1>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              name="email"
              placeholder="Digite um e-mail válido"
              label="E-mail"
              type="email"
            />
            <Input
              name="username"
              placeholder="Digite um nome de usuário"
              label="Nome de usuário"
            />
            <Input
              name="firstName"
              placeholder="Digite o primeiro nome"
              label="Primeiro nome"
            />
            <Input
              name="lastName"
              placeholder="Digite o sobrenome"
              label="Sobrenome"
            />
            <Select isMulti name="roles" label="Permissões" options={roles} />
            <Button type="submit" loading={isLoading}>
              Salvar
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
};
