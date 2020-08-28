import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 30px auto;
  h1 {
    color: #353535;
    margin-bottom: 20px;
  }
`;
export const Content = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;

  width: 100%;
`;

export const TabGroup = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-gap: 20px;
  margin-bottom: 20px;
`;

interface TabItemProps {
  active?: boolean;
}

export const TabItem = styled.li<TabItemProps>`
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #e67e22;
  }
  ${props =>
    props.active &&
    css`
      border-bottom: 2px solid #e67e22;
    `}
`;

export const SolicitationsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 180px);
  grid-gap: 20px;
  height: 200px;
  list-style: none;
  li {
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 20px;
      svg {
        margin: 0 auto 0 10px;
        margin-right: auto;
      }

      small {
        margin: 0 10px;
        font-size: 10px;
        color: #808080;
      }
    }
    div + div {
      display: flex;
      align-items: center;
      flex-direction: column;
      span {
        color: #808080;
        font-size: 12px;
      }
      h3 {
        font-size: 18px;
      }
    }
    a {
      border: none;
      background: none;
      height: 40px;
      text-transform: uppercase;
      font-weight: bold;
      transition: box-shadow, color 0.2s;
      text-decoration: none;
      color: inherit;
      margin-top: auto;
      &:hover {
        color: #ff872c;
      }
    }
    &:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
  }
`;

export const SolicitationTableList = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  tr th {
    padding: 10px 0;
    border-bottom: 1px solid #d3d3d3;
  }
  td {
    padding: 10px 0;
  }
`;
