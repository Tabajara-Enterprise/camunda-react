import React, { useState, useEffect } from 'react';

import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { IProcessDefinition } from '../../interfaces/IProcessDefinition';

import { Container, DeploymentList } from './styles';

export const Dashboard: React.FC = () => {
  const [processes, setProcesses] = useState<IProcessDefinition[]>();

  useEffect(() => {
    async function loadDeployments() {
      const response = await api.get<IProcessDefinition[]>(
        'process-definition?latest=true&active=true',
      );
      setProcesses(response.data);
    }
    loadDeployments();
  }, []);
  return (
    <Container>
      <h1>Processos disponíveis</h1>
      <DeploymentList>
        {processes?.map(process => (
          <Link key={process.id} to={`/start-process/key/${process.key}`}>
            <li>
              <FiSettings size={35} />
              <div>
                <h3>{process.name}</h3>
                <small>{process.versionTag}</small>
              </div>
            </li>
          </Link>
        ))}
      </DeploymentList>
    </Container>
  );
};
