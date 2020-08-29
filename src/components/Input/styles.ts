import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

export const ContainerGroup = styled.div`
  margin-bottom: 15px;
  label {
    font-weight: bold;
  }
`;

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
  disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: transparent;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  border: 1px solid #d3d3d3;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #3498db;
      border-color: #3498db;
    `}
  ${props =>
    props.isField &&
    css`
      color: #3498db;
    `}
    ${props =>
      props.disabled &&
      css`
        background: #d3d3d3;
        cursor: not-allowed;
        input {
          cursor: not-allowed;
        }
      `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #353535;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #f4ede8;
    font-size: 12px;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
