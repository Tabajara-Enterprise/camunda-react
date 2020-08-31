import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 1100px;
  margin: 30px auto;
  h1 {
    color: #353535;
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  background: #fff;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3498db;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #fff;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    text-transform: uppercase;
    transition: background-color 0.3s;
    &:hover {
      background: ${shade(0.2, '#3498db')};
    }
    svg {
      margin-right: 10px;
    }
  }
`;
