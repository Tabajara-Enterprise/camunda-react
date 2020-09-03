import React, { useState, useEffect } from 'react';

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
import api from '../../services/api';

interface Task {
  id: string;
  name: string;
  processInstanceId: string;
  formKey: any;
}

export const Tasks: React.FC = () => {
  const [tabActive, setTabActive] = useState<number>(1);
  const [tasks, setTasks] = useState<Task[]>();

  useEffect(() => {
    api.get<Task[]>('/v1/tasks').then(response => setTasks(response.data));
  }, []);

  async function handleAsumeTask(taskId: string): Promise<void> {
    await api.post(`/v1/tasks/${taskId}/claim`);
  }
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
              {tasks?.map(task => (
                <TaskItem key={task.id}>
                  <td />
                  <td>-</td>
                  <td>-</td>
                  <td>{task.name}</td>
                  <td>
                    <Dropdown icon={FiMenu}>
                      <MenuActionItem>
                        <Link to="!">
                          <FiEye />
                          <span>Detalhes</span>
                        </Link>
                      </MenuActionItem>
                      <MenuActionItem>
                        <button
                          type="button"
                          onClick={() => handleAsumeTask(task.id)}
                        >
                          <FiLink />
                          <span>Assumir</span>
                        </button>
                      </MenuActionItem>
                    </Dropdown>
                  </td>
                </TaskItem>
              ))}
            </tbody>
          </TaskList>
        </Content>
      </Container>
    </>
  );
};
