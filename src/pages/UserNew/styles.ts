import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 30px;
  h1 {
    margin-bottom: 20px;
  }
`;
export const Content = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    button {
      width: 200px;
      align-self: flex-end;
    }
  }
`;
