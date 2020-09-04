import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 0 30px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  a {
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    background: #bdc3c7;
    transition: background-color 0.3s;
    &:hover {
      background: ${shade(0.2, '#bdc3c7')};
    }
  }
`;
export const Content = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 1px 0 rgba(59, 89, 178, 0.08),
    0 4px 14px rgba(59, 89, 178, 0.06);
  ul {
    list-style: none;
    li {
      padding: 10px;
      strong {
        margin-right: 5px;
      }
    }
  }
`;
