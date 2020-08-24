import React, { useState, useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import api from '../../services/api';
import { IDeployment } from '../../interfaces/IDeployment';
import { Container, DeploymentList } from './styles';

export const Dashboard: React.FC = () => {
  const [deployments, setDeployments] = useState<IDeployment[]>();

  useEffect(() => {
    api.get<IDeployment[]>('deployment').then(res => setDeployments(res.data));
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
              <span>hà 2 dias atras</span>
            </div>
          </li>
        ))}
      </DeploymentList>
    </Container>
  );
};
