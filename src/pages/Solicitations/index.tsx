import React, { useState } from 'react';
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

export const Solicitations: React.FC = () => {
  const [tabActive, setTabActive] = useState<number>(1);
  return (
    <>
      <Container>
        <h1>Solicitações</h1>
        <TabGroup>
          <TabItem active={!!(tabActive === 1)} onClick={() => setTabActive(1)}>
            Nova solicitação
          </TabItem>
          <TabItem onClick={() => setTabActive(2)} active={!!(tabActive === 2)}>
            Solicitações em andamento
          </TabItem>
          <TabItem onClick={() => setTabActive(3)} active={!!(tabActive === 3)}>
            Solicitações encerradas
          </TabItem>
        </TabGroup>
        {tabActive === 1 && (
          <SolicitationsList>
            <li>
              <div>
                <FiStar />
                <small>Versão 2.0</small>
              </div>
              <div>
                <span>ID12345678</span>
                <h3>Reserva de sala</h3>
              </div>
              <Link to="/solicitations/start">Iniciar</Link>
            </li>
            <li>
              <div>
                <FiStar />
                <small>Versão 2.0</small>
              </div>
              <div>
                <span>ID12345678</span>
                <h3>Curso EAD</h3>
              </div>
              <Link to="/solicitations/start">Iniciar</Link>
            </li>
            <li>
              <div>
                <FiStar />
                <small>Versão 2.0</small>
              </div>
              <div>
                <span>ID12345678</span>
                <h3>Curso Presencial</h3>
              </div>
              <Link to="/solicitations/start">Iniciar</Link>
            </li>
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
      </Container>
    </>
  );
};
