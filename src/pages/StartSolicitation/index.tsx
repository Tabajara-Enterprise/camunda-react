import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiPlay } from 'react-icons/fi';
import api from '../../services/api';
import { BPMNDiagram } from '../../components/BPMNDiagram';

import { Container, Content } from './styles';

interface ProcessDefinition {
  id: string;
  key: string;
  name: string;
  versionTag: string;
}

export const StartSolicitation: React.FC = () => {
  const [processDefinition, setProcessDefinition] = useState<
    ProcessDefinition
  >();
  const [xml, setXml] = useState();
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    api
      .get<ProcessDefinition>(`/v1/processes_definitions/${id}`)
      .then(response => setProcessDefinition(response.data));
    api
      .get(`/v1/processes_definitions/${id}/diagram`)
      .then(response => setXml(response.data));
  }, [id]);

  const handleStartProcess = async (key: string): Promise<void> => {
    await api.post(`/v1/processes_instances/${key}`, {});
    history.push('/solicitations');
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
          {xml && <BPMNDiagram xml={xml} />}
          <br />
          <button
            type="button"
            onClick={() => handleStartProcess(processDefinition.key)}
          >
            <FiPlay size={30} />
            Iniciar
          </button>
        </Content>
      </Container>
    </>
  );
};
