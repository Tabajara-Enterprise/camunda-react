import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #ffff;
  padding: 40px 20px;
  border-radius: 5px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      height: 50px;
      padding: 10px;
      border: 1px solid #d4d4d4;
      border-radius: 5px;
      margin-bottom: 20px;
    }
    button {
      height: 50px;
      border-radius: 5px;
      border: none;
      background: #3498db;
      color: #ffff;
      text-transform: uppercase;
    }
  }
`;
