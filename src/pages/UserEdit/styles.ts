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
  box-shadow: 0 0 1px 0 rgba(59, 89, 178, 0.08),
    0 4px 14px rgba(59, 89, 178, 0.06);
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
