import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, HeaderContent, Content } from './styles';
import api from '../../services/api';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  roles: string[];
}

export const UserDetail: React.FC = () => {
  const [user, setUser] = useState<User>();
  const { id } = useParams();
  useEffect(() => {
    api.get<User>(`/v1/users/${id}`).then(response => setUser(response.data));
  }, [id]);

  if (!user) {
    return (
      <Container>
        <h1>Carregando..</h1>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderContent>
        <h1>
          {user.firstName} {user.lastName}
        </h1>
        <Link to="/users">
          <FiArrowLeft />
          Voltar
        </Link>
      </HeaderContent>
      <Content>
        <ul>
          <li>
            <strong>Usuário: </strong>
            <span>{user.username}</span>
          </li>
          <li>
            <strong>E-mail:</strong>
            <span>{user.email}</span>
          </li>
          <li>
            <strong>Perfis:</strong>
            <span>{user.roles?.join(' | ')}</span>
          </li>
        </ul>
      </Content>
    </Container>
  );
};
