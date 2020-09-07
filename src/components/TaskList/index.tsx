import React from 'react';

import { FiMenu, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, TaskItem, MenuActionItem } from './styles';
import Dropdown from '../Dropdown';

interface Task {
  id: string;
  name: string;
  processInstanceId: string;
  formKey: any;
  assignee: string;
}

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
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
        {tasks.map(task => (
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
                  {/* <button
                          type="button"
                          onClick={() => handleAsumeTask(task.id)}
                        >
                          <FiLink />
                          <span>Assumir</span>
                        </button> */}
                </MenuActionItem>
              </Dropdown>
            </td>
          </TaskItem>
        ))}
      </tbody>
    </Container>
  );
};
