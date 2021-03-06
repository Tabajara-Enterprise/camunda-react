import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0 30px;
  h1 {
    margin-bottom: 20px;
  }
`;
export const Content = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;

  width: 100%;
  box-shadow: 0 0 1px 0 rgba(59, 89, 178, 0.08),
    0 4px 14px rgba(59, 89, 178, 0.06);
`;

export const TabGroup = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 180px);
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
    box-shadow: 0 0 1px 0 rgba(59, 89, 178, 0.08),
      0 4px 14px rgba(59, 89, 178, 0.06);
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
        text-align: center;
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

export const MenuActionItem = styled.li`
  width: 100%;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #f4f4f4;
  transition: background 0.2s;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #353535;
    transition: color 0.2s;
  }
  button {
    display: flex;
    border: 0;
    background: transparent;
    color: #353535;
    transition: color 0.2s;
  }
  svg {
    margin-right: 5px;
  }
  &:hover {
    background: #fff;
    svg {
      color: #2c3e50;
    }
    a {
      color: #2c3e50;
    }
    button {
      color: #2c3e50;
    }
  }
`;
