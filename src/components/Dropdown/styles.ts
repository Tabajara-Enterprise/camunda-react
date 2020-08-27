import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Badge = styled.button`
  background: transparent;
  margin-bottom: 5px;
  border: 0;
  position: relative;
  cursor: pointer;
  transition: background 0.2s;
  svg {
    color: #353535;
  }
  &:hover {
    color: #2c3e50;
  }
`;

const enter = keyframes`
from {
    opacity: 0;
    transform: scaleY(0.98) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

interface ItemListProps {
  open: boolean;
}

export const ItemList = styled.ul<ItemListProps>`
  list-style: none;
  position: absolute;
  left: 0;
  background: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.22);
  border: solid 1px #f5f5f5;
  display: ${props => (props.open ? 'block' : 'none')};
  z-index: 1;
  animation: ${enter} 0.2s ease forwards;
  border-radius: 5px;
`;
