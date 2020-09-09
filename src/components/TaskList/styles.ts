import styled from 'styled-components';

export const Container = styled.table`
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
