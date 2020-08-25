import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 30px auto;
  h1 {
    color: #353535;
  }
`;

export const DeploymentList = styled.ul`
  margin-top: 30px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  color: #4d4d44;
  svg {
    margin-right: 20px;
    transition: all 1s;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    min-height: 100px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: box-shadow 0.2s;
    &:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      svg {
        transform: rotate(180deg);
      }
    }
  }
`;
