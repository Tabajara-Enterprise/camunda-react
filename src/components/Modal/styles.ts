import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  to {
    opacity: 1
    transform: translate3d(0, 0, 0);
  }
`;
export const Content = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 40px;
  width: 600px;
  animation: ${fadeIn} 0.5s;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 22px;
  }
  svg {
    color: inherit;
  }
  button {
    border: 0;
    background: transparent;
  }
`;
