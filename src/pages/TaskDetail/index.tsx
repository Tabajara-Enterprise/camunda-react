import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { DynamicForm, FormField } from '../../components/DynamicForm';
import { Container, Content } from './styles';
import { BPMNDiagram } from '../../components/BPMNDiagram';

interface Task {
  id: string;
  name: string;
  processInstanceId: string;
  formData: {
    formFields: FormField[];
  };
}

export const TaskDetail: React.FC = () => {
  const { id } = useParams();
  const [task, setTask] = useState<Task>();
  const [xml, setXml] = useState();
  useEffect(() => {
    async function load(): Promise<void> {
      const { data: taskResponse } = await api.get<Task>(`/v1/tasks/${id}`);
      setTask(taskResponse);

      const { data: diagram } = await api.get(
        `/v1/processes_definitions/${taskResponse.processInstanceId}/diagram`,
      );
      setXml(diagram);
    }
    load();
  }, [id]);
  const onSubmitForm = (data: any): void => {
    console.log(data);
  };

  return (
    <Container>
      <h1>{task?.name}</h1>
      <Content>{xml && <BPMNDiagram xml={xml} />}</Content>
      <Content>
        {task && (
          <DynamicForm
            formFields={task.formData.formFields}
            onSubmit={onSubmitForm}
          />
        )}
      </Content>
    </Container>
  );
};
