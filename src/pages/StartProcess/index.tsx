import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Content } from './styles';
import api from '../../services/api';

interface IFormData {
  [key: string]: {
    type: string;
    value: string;
    valueInfo: unknown;
  };
}

export const StartProcess: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>();
  const { key } = useParams();
  useEffect(() => {
    api
      .get(`/process-definition/key/${key}/form-variables`)
      .then(res => setFormData(res.data));
  }, [key]);
  return (
    <Container>
      <h1>Iniciar o processo X</h1>
      <Content>
        <h3>Dados do formulario</h3>
        {JSON.stringify(formData, null, 2)}
        <button type="button">Iniciar processo</button>
      </Content>
    </Container>
  );
};
