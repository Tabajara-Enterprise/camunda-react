import React from 'react';

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
import { Header } from '../../components/Header';
import Dropdown from '../../components/Dropdown';

export const Users: React.FC = () => {
  return (
    <>
      <Header />
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
            <UserItem>
              <td />
              <td>Raphael</td>
              <td>raphaelstn@gmail.com</td>
              <td>Ativo</td>
              <td>
                <Dropdown icon={FiMenu}>
                  <MenuActionItem>
                    <Link to="!">
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
                      onClick={() => console.log('lkajsdf')}
                    >
                      <FiTrash />
                      <span>Remover</span>
                    </button>
                  </MenuActionItem>
                </Dropdown>
              </td>
            </UserItem>
            <UserItem>
              <td />
              <td>Fernando</td>
              <td>fernando_tomate@gmail.com</td>
              <td>Ativo</td>
              <td>
                <Dropdown icon={FiMenu}>
                  <MenuActionItem>
                    <Link to="!">
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
                      onClick={() => console.log('lkajsdf')}
                    >
                      <FiTrash />
                      <span>Remover</span>
                    </button>
                  </MenuActionItem>
                </Dropdown>
              </td>
            </UserItem>
            <UserItem>
              <td />
              <td>Cleiton</td>
              <td>dev.cleiton@gmail.com</td>
              <td>Desativado</td>
              <td>
                <Dropdown icon={FiMenu}>
                  <MenuActionItem>
                    <Link to="!">
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
                      onClick={() => console.log('lkajsdf')}
                    >
                      <FiTrash />
                      <span>Remover</span>
                    </button>
                  </MenuActionItem>
                </Dropdown>
              </td>
            </UserItem>
          </UserList>
        </Content>
      </Container>
    </>
  );
};
