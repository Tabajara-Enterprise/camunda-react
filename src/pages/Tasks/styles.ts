import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0 30px;
  h1 {
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 1px 0 rgba(59, 89, 178, 0.08),
    0 4px 14px rgba(59, 89, 178, 0.06);
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

export const TaskList = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  tr th {
    padding: 10px 0;
    border-bottom: 1px solid #d3d3d3;
  }
`;
export const TaskItem = styled.tr`
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
