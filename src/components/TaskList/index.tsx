import React from 'react';

import { FiMenu, FiEye, FiLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, TaskItem, MenuActionItem } from './styles';
import Dropdown from '../Dropdown';
import api from '../../services/api';

interface Task {
  id: string;
  name: string;
  processInstanceId: string;
  formKey: any;
  assignee: string;
}

interface TaskListProps {
  tasks: Task[];
  loadTasks: () => Promise<void>;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, loadTasks }) => {
  async function handleAsumeTask(taskId: string): Promise<void> {
    await api.post(`/v1/tasks/${taskId}/claim`);
    await loadTasks();
  }
  return (
    <Container>
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
        {!tasks.length && (
          <TaskItem>
            <td style={{ textAlign: 'center' }} colSpan={5}>
              Não há registros
            </td>
          </TaskItem>
        )}
        {tasks.map(task => (
          <TaskItem key={task.id}>
            <td />
            <td>-</td>
            <td>-</td>
            <td>{task.name}</td>
            <td>
              <Dropdown icon={FiMenu}>
                {task.assignee && (
                  <MenuActionItem>
                    <Link to={`/tasks/${task.id}`}>
                      <FiEye />
                      <span>Detalhes</span>
                    </Link>
                  </MenuActionItem>
                )}
                {!task.assignee && (
                  <MenuActionItem>
                    <button
                      type="button"
                      onClick={() => handleAsumeTask(task.id)}
                    >
                      <FiLink />
                      <span>Assumir</span>
                    </button>
                  </MenuActionItem>
                )}
              </Dropdown>
            </td>
          </TaskItem>
        ))}
      </tbody>
    </Container>
  );
};
