import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 30px;
`;

export const CardList = styled.ul`
  margin-top: 30px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  color: #4d4d44;
`;
export const Card = styled.li`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: box-shadow 0.2s;
  box-shadow: 0 0 1px 0 rgba(59, 89, 178, 0.08),
    0 4px 14px rgba(59, 89, 178, 0.06);
`;
