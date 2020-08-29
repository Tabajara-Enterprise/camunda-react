import React, { useState } from 'react';

import { FiEye, FiLink, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Content,
  TabGroup,
  TabItem,
  TaskList,
  TaskItem,
  MenuActionItem,
} from './styles';
import Dropdown from '../../components/Dropdown';

export const Tasks: React.FC = () => {
  const [tabActive, setTabActive] = useState<number>(1);
  return (
    <>
      <Container>
        <h1>Lista de tarefas</h1>
        <Content>
          <TabGroup>
            <TabItem
              active={!!(tabActive === 1)}
              onClick={() => setTabActive(1)}
            >
              Tarefas disponíveis
            </TabItem>
            <TabItem
              onClick={() => setTabActive(2)}
              active={!!(tabActive === 2)}
            >
              Tarefas em andamento
            </TabItem>
            <TabItem
              onClick={() => setTabActive(3)}
              active={!!(tabActive === 3)}
            >
              Tarefas concluídas
            </TabItem>
          </TabGroup>
          <TaskList>
            <thead>
              <tr>
                <th>#</th>
                <th>Prazo</th>
                <th>Solicitação</th>
                <th>Tarefa</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <TaskItem>
                <td />
                <td>12/04/20</td>
                <td>Reserva de sala</td>
                <td>Informar quantidade de alunos</td>
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
                        <FiLink />
                        <span>Assumir</span>
                      </Link>
                    </MenuActionItem>
                  </Dropdown>
                </td>
              </TaskItem>
              <TaskItem>
                <td />
                <td>12/04/20</td>
                <td>Reserva de sala</td>
                <td>Informar quantidade de alunos</td>
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
                        <FiLink />
                        <span>Assumir</span>
                      </Link>
                    </MenuActionItem>
                  </Dropdown>
                </td>
              </TaskItem>
              <TaskItem>
                <td />
                <td>12/04/20</td>
                <td>Reserva de sala</td>
                <td>Informar quantidade de alunos</td>
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
                        <FiLink />
                        <span>Assumir</span>
                      </Link>
                    </MenuActionItem>
                  </Dropdown>
                </td>
              </TaskItem>
            </tbody>
          </TaskList>
        </Content>
      </Container>
    </>
  );
};
