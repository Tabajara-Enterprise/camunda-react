import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiEye } from 'react-icons/fi';
import api from '../../services/api';

import { BPMNDiagram } from '../../components/BPMNDiagram';
import { DynamicForm, FormField } from '../../components/DynamicForm';
import { Button } from '../../components/Button';
import { useToast } from '../../hooks/toast';
import { useModal } from '../../hooks/modal';
import Tooltip from '../../components/Tooltip';

import { Container, HeaderContent, Content } from './styles';

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
  const { openModal } = useModal();
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

  const handleOpenDiagram = useCallback(() => {
    openModal({
      title: 'Diagrama',
      container: () => BPMNDiagram({ xml }),
    });
  }, [openModal, xml]);

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
        <HeaderContent>
          <h1>{processDefinition.name}</h1>
          <Tooltip title="Visualizar Diagrama">
            <button type="button" onClick={handleOpenDiagram}>
              <FiEye size={25} />
            </button>
          </Tooltip>
        </HeaderContent>

        {!!processDefinition.startFormData.formFields.length && (
          <Content>
            <h3>
              {processDefinition.startFormData.formKey
                ? processDefinition.startFormData.formKey
                : 'Formulário'}
            </h3>
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
