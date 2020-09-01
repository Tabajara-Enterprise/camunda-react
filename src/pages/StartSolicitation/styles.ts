import styled from 'styled-components';

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
  margin-bottom: 20px;
  h3 {
    margin-bottom: 20px;
    &::after {
      content: '';
      display: block;
      width: 200px;
      height: 2px;
      background: #ff872c;
    }
  }
`;
