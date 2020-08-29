import React, { useState, useEffect, useCallback } from 'react';

import { FiMenu, FiEdit, FiTrash, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  HeaderContent,
  Content,
  UserList,
  UserItem,
  MenuActionItem,
} from './styles';
import Dropdown from '../../components/Dropdown';
import api from '../../services/api';
import { useModal } from '../../hooks/modal';
import { UserDelete } from '../../components/UserDelete';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { openModal } = useModal();

  useEffect(() => {
    api.get('/v1/users').then(response => setUsers(response.data));
  }, []);

  const handleRemoveUserList = useCallback((id: string) => {
    setUsers(state => state.filter(user => user.id !== id));
  }, []);
  const handleRemoveItem = useCallback(
    (user: User) => {
      openModal({
        title: 'Remover usuário',
        container: () => UserDelete({ user, handleRemoveUserList }),
      });
    },
    [openModal, handleRemoveUserList],
  );
  return (
    <>
      <Container>
        <HeaderContent>
          <h1>Usuários</h1>
          <Link to="/users/new">Novo usuário</Link>
        </HeaderContent>

        <Content>
          <UserList>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <UserItem key={user.id}>
                  <td />
                  <td>{`${user.firstName} ${user.lastName}`}</td>
                  <td>{user.email}</td>
                  <td>Ativo</td>
                  <td>
                    <Dropdown icon={FiMenu}>
                      <MenuActionItem>
                        <Link to={`/users/${user.id}`}>
                          <FiEye />
                          <span>Detalhes</span>
                        </Link>
                      </MenuActionItem>
                      <MenuActionItem>
                        <Link to="!">
                          <FiEdit />
                          <span>Editar</span>
                        </Link>
                      </MenuActionItem>
                      <MenuActionItem>
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(user)}
                        >
                          <FiTrash />
                          <span>Remover</span>
                        </button>
                      </MenuActionItem>
                    </Dropdown>
                  </td>
                </UserItem>
              ))}
            </tbody>
          </UserList>
        </Content>
      </Container>
    </>
  );
};
