import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  select {
    height: 50px;
    border: 1px solid #d3d3d3;
    background: none;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    margin-bottom: 15px;
  }
`;
