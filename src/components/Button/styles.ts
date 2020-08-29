import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
interface ContainerProps {
  isLoading: number;
}

export const Container = styled.button<ContainerProps>`
  background: #3498db;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.3s;
  &:hover {
    background: ${shade(0.2, '#3498db')};
  }
  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
`;
export const Loading = styled.div`
  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;
