import React, { useEffect, useState } from 'react';
import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  SolicitationsList,
  TabGroup,
  TabItem,
  SolicitationTableList,
} from './styles';
import { AuthorizedElement } from '../../utils/authorization';
import { DeployProcess } from '../../components/Camunda/DeployProcess';
import api from '../../services/api';

interface ProcessInstance {
  id: string;
  key: string;
  name: string;
  versionTag: string;
}

export const Solicitations: React.FC = () => {
  const [tabActive, setTabActive] = useState<number>(1);
  const [processesInstance, setProcessesInstance] = useState<
    ProcessInstance[]
  >();
  useEffect(() => {
    api.get<ProcessInstance[]>('/v1/processes_definitions').then(response => {
      const processes = response.data.map(process => {
        const arrayId = process.id.split('-');
        const id = arrayId[arrayId.length - 1];
        return {
          ...process,
          id,
        };
      });
      setProcessesInstance(processes);
    });
  }, []);
  return (
    <>
      <Container>
        <h1>Solicitações</h1>

        <TabGroup>
          <TabItem active={!!(tabActive === 1)} onClick={() => setTabActive(1)}>
            Nova
          </TabItem>
          <TabItem onClick={() => setTabActive(2)} active={!!(tabActive === 2)}>
            Em andamento
          </TabItem>
          <TabItem onClick={() => setTabActive(3)} active={!!(tabActive === 3)}>
            Encerradas
          </TabItem>
          <AuthorizedElement roles={['ADMINISTRATOR']}>
            <TabItem
              active={!!(tabActive === 4)}
              onClick={() => setTabActive(4)}
            >
              Upload de processo
            </TabItem>
          </AuthorizedElement>
        </TabGroup>
        {tabActive === 1 && (
          <SolicitationsList>
            {processesInstance?.map(process => (
              <li key={process.id}>
                <div>
                  <FiStar />
                  <small>Versão {process.versionTag}</small>
                </div>
                <div>
                  <span>{process.id}</span>
                  <h3>{process.name}</h3>
                </div>
                <Link to={`/solicitations/start/${process.id}`}>Iniciar</Link>
              </li>
            ))}
          </SolicitationsList>
        )}
        {tabActive === 2 && (
          <Content>
            <SolicitationTableList>
              <thead>
                <tr>
                  <th>Início</th>
                  <th>Prazo</th>
                  <th>Solicitação</th>
                  <th>Andamento</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12/03</td>
                  <td>12/04</td>
                  <td>Reserva de sala</td>
                  <td>5%</td>
                  <td />
                </tr>
              </tbody>
            </SolicitationTableList>
          </Content>
        )}
        {tabActive === 4 && <DeployProcess />}
      </Container>
    </>
  );
};
