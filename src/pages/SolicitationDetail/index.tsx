import React, { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, HeaderContent, Content } from './styles';
import api from '../../services/api';

interface Solicitation {
  id: string;
  processDefinitionId: string;
  description: string;
  startedAt: string;
}

export const SolicitationDetail: React.FC = () => {
  const [solicitation, setSolicitation] = useState<Solicitation>();
  const { id } = useParams();

  useEffect(() => {
    api
      .get<Solicitation>(`v1/processes_instances/${id}`)
      .then(response => setSolicitation(response.data));
  }, [id]);
  if (!solicitation) {
    return (
      <Container>
        <h1>Carregando..</h1>
      </Container>
    );
  }
  return (
    <Container>
      <HeaderContent>
        <h1>Detalhes da solicitação</h1>
        <Link to="/solicitations">
          <FiArrowLeft />
          Voltar
        </Link>
      </HeaderContent>
      <Content>{JSON.stringify(solicitation, null, 4)}</Content>
    </Container>
  );
};
