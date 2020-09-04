import React, { useEffect, useCallback, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import api from '../../services/api';

import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content } from './styles';
import { useToast } from '../../hooks/toast';

interface Role {
  name: string;
  description: string;
}
interface RoleOptions {
  label: string;
  value: string;
}
interface UserFormData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: Role[];
  username: string;
}

export const UserEdit: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialData, setInitialData] = useState<any>();
  const [roles, setRoles] = useState<RoleOptions[]>();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { id } = useParams();
  const { addToast } = useToast();

  useEffect(() => {
    api.get<Role[]>('/v1/roles').then(response => {
      const rolesOptions: RoleOptions[] = response.data.map(role => ({
        label: role.name,
        value: role.name,
      }));
      setRoles(rolesOptions);
    });
    api.get<UserFormData>(`/v1/users/${id}`).then(response => {
      const teste = {
        ...response.data,
        roles: response.data.roles.map(role => ({
          label: role,
          value: role,
        })),
      };
      setInitialData(teste);
    });
  }, [id]);

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
        await api.put(`/v1/users`, {
          ...data,
          id,
        });
        history.push('/users');
        addToast({
          type: 'success',
          title: 'Cadastro atualizado 🎉🎉🎉',
          description: 'Tudo certo, confira os dados atualizados',
        });
      } catch (err) {
        setIsLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: 'error',
          title: 'Erro no cadastro 🤬🤬',
          description:
            'Algo de errado não esta certo, tente novamente mais tarde',
        });
      }
    },
    [history, id],
  );

  return (
    <>
      <Container>
        <h1>Editar usuário</h1>
        <Content>
          {initialData && (
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              initialData={initialData}
            >
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
                disabled
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
                Atualizar
              </Button>
            </Form>
          )}
        </Content>
      </Container>
    </>
  );
};
