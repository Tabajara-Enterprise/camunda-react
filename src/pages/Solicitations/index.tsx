import React, { useEffect, useState } from 'react';
import { FiStar, FiEye, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  SolicitationsList,
  TabGroup,
  TabItem,
  SolicitationTableList,
  MenuActionItem,
} from './styles';
import { AuthorizedElement } from '../../utils/authorization';
import { DeployProcess } from '../../components/Camunda/DeployProcess';
import api from '../../services/api';
import parseDate from '../../utils/parseDate';
import Dropdown from '../../components/Dropdown';

interface ProcessDefinition {
  id: string;
  key: string;
  name: string;
  versionTag: string;
  showId: string;
}
interface ProcessInstance {
  id: string;
  name: string;
  processDefinitionId: string;
  description: string;
  startedAt: string;
}

export const Solicitations: React.FC = () => {
  const [tabActive, setTabActive] = useState<number>(1);
  const [processesDefinition, setProcessesDefinition] = useState<
    ProcessDefinition[]
  >();
  const [processesInstance, setProcessesInstance] = useState<ProcessInstance[]>(
    [],
  );
  useEffect(() => {
    api.get<ProcessDefinition[]>('/v1/processes_definitions').then(response => {
      const processes = response.data.map(process => {
        const arrayId = process.id.split('-');
        const showId = arrayId[arrayId.length - 1];
        return {
          ...process,
          showId,
        };
      });
      setProcessesDefinition(processes);
    });
    api.get<ProcessInstance[]>('/v1/processes_instances').then(response => {
      const processes = response.data.map(process => ({
        ...process,
        startedAt: parseDate(process.startedAt),
      }));
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
            {processesDefinition?.map(process => (
              <li key={process.id}>
                <div>
                  <FiStar />
                  <small>Versão {process.versionTag}</small>
                </div>
                <div>
                  <span>{process.showId}</span>
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
                {processesInstance?.map(process => (
                  <tr key={process.id}>
                    <td>{process.startedAt}</td>
                    <td>-</td>
                    <td>{process.name}</td>
                    <td>-</td>
                    <td>
                      <Dropdown icon={FiMenu}>
                        <MenuActionItem>
                          <Link to={`/solicitations/${process.id}`}>
                            <FiEye />
                            <span>Detalhes</span>
                          </Link>
                        </MenuActionItem>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </SolicitationTableList>
          </Content>
        )}
        {tabActive === 4 && <DeployProcess />}
      </Container>
    </>
  );
};
