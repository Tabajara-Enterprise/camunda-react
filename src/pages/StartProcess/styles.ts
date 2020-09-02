import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 0 30px;
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

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    > div {
      display: flex;
      flex-direction: column;
      label {
        margin: 5px 0;
      }
      input {
        border: 1px solid #d4d4d4;
        padding: 15px 10px;
        margin-bottom: 10px;
        border-radius: 5px;
      }
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
  }
`;
