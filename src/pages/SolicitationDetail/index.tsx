import React, { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Container, HeaderContent, Content } from './styles';
import api from '../../services/api';

interface Variable {
  value: any;
  label: string;
}
interface HistoryItem {
  id: string;
  assignee: string;
  name: string;
}

interface Solicitation {
  id: string;
  processDefinitionId: string;
  description: string;
  startedAt: string;
  variables: any[];
}

export const SolicitationDetail: React.FC = () => {
  const [solicitation, setSolicitation] = useState<Solicitation>();
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const { id } = useParams();

  useEffect(() => {
    api.get<Solicitation>(`v1/processes_instances/${id}`).then(response => {
      const variables = Object.keys(response.data.variables).map(
        (key: string) => ({
          label: key,
          value: response.data.variables[key],
        }),
      );
      const process = {
        ...response.data,
        variables,
      };
      setSolicitation(process);
    });
    api.get<HistoryItem[]>('v1/tasks/history').then(response => {
      const items = response.data.filter(item => item.id === id);
      setHistory(items);
    });
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
      <Content>
        <h3>Geral</h3>
        <ul>
          <li>
            <strong>Prazo:</strong>
            <span>30 dias</span>
          </li>
          <li>
            <strong>Data de início</strong>
            <span>30/02/2020 às 19:00</span>
          </li>
        </ul>
        <h3>Detalhes</h3>
        <ul>
          {solicitation.variables.map(({ label, value }) => (
            <li key={label}>
              <strong>{label}</strong>
              <span>{value}</span>
            </li>
          ))}
        </ul>
        <h3>Histórico</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Usuário</th>
              <th>Tarefa</th>
              <th>Executado em</th>
            </tr>
          </thead>
          <tbody>
            {history.length === 0 && (
              <tr>
                <td colSpan={4}>Não há dados</td>
              </tr>
            )}
            {history.map(item => (
              <tr key={item.id}>
                <td>#</td>
                <td>{item.assignee}</td>
                <td>{item.name}</td>
                <td>há 32 minutos</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
};
