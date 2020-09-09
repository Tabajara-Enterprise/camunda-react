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
  background: #557cf2;
  height: 50px;
  border-radius: 5px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.3s;
  &:hover {
    background: ${shade(0.2, '#557cf2')};
  }
  cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
`;
export const Loading = styled.div`
  svg {
    animation: ${rotate} 1s linear infinite;
  }
`;
