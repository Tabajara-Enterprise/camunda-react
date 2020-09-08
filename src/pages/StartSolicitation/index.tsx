import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { BPMNDiagram } from '../../components/BPMNDiagram';

import { Container, Content } from './styles';
import { DynamicForm, FormField } from '../../components/DynamicForm';
import { Button } from '../../components/Button';
import { useToast } from '../../hooks/toast';

interface ProcessDefinition {
  id: string;
  key: string;
  name: string;
  versionTag: string;
  startFormData: {
    formKey: string;
    formFields: FormField[];
  };
}

export const StartSolicitation: React.FC = () => {
  const [processDefinition, setProcessDefinition] = useState<
    ProcessDefinition
  >();
  const [xml, setXml] = useState();
  const { id } = useParams();
  const history = useHistory();
  const { addToast } = useToast();
  useEffect(() => {
    api
      .get<ProcessDefinition>(`/v1/processes_definitions/${id}`)
      .then(response => setProcessDefinition(response.data));
    api
      .get(`/v1/processes_definitions/${id}/diagram`)
      .then(response => setXml(response.data));
  }, [id]);

  const handleStartProcess = async (variables: any = {}): Promise<void> => {
    await api.post(
      `/v1/processes_instances/${processDefinition?.key}`,
      variables,
    );
    history.push('/solicitations');
    addToast({
      type: 'success',
      title: 'Solicitação iniciada 🎉🎉🎉',
      description:
        'Sua solicitação foi iniciada, agora você pode acompanhá-la na aba "em andamento"',
    });
  };

  const onSubmitForm = (data: any): void => {
    handleStartProcess(data);
  };

  if (!processDefinition) {
    return (
      <Container>
        <h1>Aguarde...</h1>
      </Container>
    );
  }
  return (
    <>
      <Container>
        <h1>{processDefinition.name}</h1>
        <Content>
          <h3>Diagrama</h3>
          {xml && <BPMNDiagram xml={xml} />}
        </Content>
        {!!processDefinition.startFormData.formFields.length && (
          <Content>
            <h3>{processDefinition.startFormData.formKey}</h3>
            <DynamicForm
              formFields={processDefinition.startFormData.formFields}
              onSubmit={onSubmitForm}
            />
          </Content>
        )}
        {!processDefinition.startFormData.formFields.length && (
          <Content>
            <Button type="button" onClick={handleStartProcess}>
              Executar Tarefa
            </Button>
          </Content>
        )}
      </Container>
    </>
  );
};
