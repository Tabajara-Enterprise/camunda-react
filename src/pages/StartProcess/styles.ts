import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-width: 1100px;
  margin: 30px auto;
  color: #353535;
  h1 {
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  h3 {
    margin-bottom: 20px;
  }

  button {
    align-self: flex-end;
    margin-top: 20px;
    width: 200px;
    background: #ff872c;
    color: #fff;
    border-radius: 5px;
    padding: 15px 30px;
    border: 0;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`;
