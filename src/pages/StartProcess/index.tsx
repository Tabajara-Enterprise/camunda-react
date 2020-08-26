import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Content } from './styles';
import api from '../../services/api';

interface IFormItems {
  name: string;
  type: string;
}

export const StartProcess: React.FC = () => {
  const [formItems, setFormItems] = useState<IFormItems[]>();
  const [formData, setFormData] = useState<any>({});
  const { key } = useParams();
  const history = useHistory();

  useEffect(() => {
    api.get(`/process-definition/key/${key}/form-variables`).then(res => {
      const itemsArray = Object.keys(res.data).map(item => ({
        name: item,
        type: res.data[item].type,
      }));
      setFormItems(itemsArray);
    });
  }, [key]);

  const handleOnChange = useCallback(e => {
    const { name, value } = e.target;
    setFormData((state: any) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    e => {
      const initialValue = {};

      e.preventDefault();
      const data = {
        variables: formItems?.reduce((obj, item) => {
          return {
            ...obj,
            [item.name]: {
              ...item,
              value: formData[item.name],
            },
          };
        }, initialValue),
      };

      api
        .post(`/process-definition/key/${key}/start`, data)
        .then(() => history.push('/'));
    },
    [formData, key, history, formItems],
  );
  return (
    <Container>
      <h1>Iniciar o processo X</h1>
      <Content>
        <h3>Dados do formulario</h3>
        <form onSubmit={handleSubmit}>
          {formItems &&
            formItems.map(item => (
              <div key={item.name}>
                <label htmlFor={item.name}>{item.name}</label>
                <input
                  type="text"
                  name={item.name}
                  value={formData[item.name]?.value}
                  onChange={handleOnChange}
                />
              </div>
            ))}
          <button type="submit">Iniciar processo</button>
        </form>
      </Content>
    </Container>
  );
};
