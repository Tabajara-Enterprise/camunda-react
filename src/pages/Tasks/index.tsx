import React, { useState, useEffect, useMemo } from 'react';

import { Link } from 'react-router-dom';
import { Container, Content, TabGroup, TabItem } from './styles';
import { TaskList } from '../../components/TaskList';
import api from '../../services/api';

interface Task {
  id: string;
  name: string;
  processInstanceId: string;
  formKey: any;
  assignee: string;
}

export const Tasks: React.FC = () => {
  const [tabActive, setTabActive] = useState<number>(1);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    api.get<Task[]>('/v1/tasks').then(response => setTasks(response.data));
  }, []);

  async function handleAsumeTask(taskId: string): Promise<void> {
    await api.post(`/v1/tasks/${taskId}/claim`);
  }

  const notAssignee = useMemo(() => {
    return tasks.filter(task => !task.assignee);
  }, [tasks]);
  const meAssignee = useMemo(() => {
    return tasks.filter(task => task.assignee === 'user');
  }, [tasks]);
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
          {tabActive === 1 && <TaskList tasks={notAssignee} />}
          {tabActive === 2 && <TaskList tasks={meAssignee} />}
          {tabActive === 3 && <TaskList tasks={notAssignee} />}
        </Content>
      </Container>
    </>
  );
};
