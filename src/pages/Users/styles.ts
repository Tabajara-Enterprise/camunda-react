import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 0 30px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  a {
    border: 0;
    border-radius: 5px;
    color: #fff;
    background: #557cf2;
    font-weight: 500;
    height: 50px;
    width: 180px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
    &:hover {
      background: ${shade(0.2, '#557cf2')};
    }
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

export const UserList = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  tr th {
    padding: 10px 0;
    border-bottom: 1px solid #d3d3d3;
  }
`;
export const UserItem = styled.tr`
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
    align-items: center;
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
