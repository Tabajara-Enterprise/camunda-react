import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  input {
    margin-bottom: 15px;
    border: 1px solid #d3d3d3;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
  }
`;
