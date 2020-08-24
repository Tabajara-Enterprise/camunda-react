import React, { useState, useEffect } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { FiSettings } from 'react-icons/fi';
import api from '../../services/api';
import { IDeployment } from '../../interfaces/IDeployment';

import { Container, DeploymentList } from './styles';

export const Dashboard: React.FC = () => {
  const [deployments, setDeployments] = useState<IDeployment[]>();

  useEffect(() => {
    async function loadDeployments() {
      const response = await api.get<IDeployment[]>('deployment');
      const data = response.data.map(deployment => ({
        ...deployment,
        deploymentTime: formatDistance(
          parseISO(deployment.deploymentTime),
          new Date(),
          {
            addSuffix: true,
            locale: pt,
          },
        ),
      }));
      setDeployments(data);
    }
    loadDeployments();
  }, []);
  return (
    <Container>
      <h1>Processos disponíveis</h1>
      <DeploymentList>
        {deployments?.map(deployment => (
          <li key={deployment.id}>
            <FiSettings size={35} />
            <div>
              <h3>{deployment.name || 'Processo sem nome'}</h3>
              <small>{deployment.deploymentTime}</small>
            </div>
          </li>
        ))}
      </DeploymentList>
    </Container>
  );
};
