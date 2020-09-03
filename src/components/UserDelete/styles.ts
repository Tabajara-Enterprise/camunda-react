import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  P {
    padding: 20px;
  }
  div {
    display: flex;
    justify-content: flex-end;
    button {
      border: 0;
      height: 40px;
      padding: 0 10px;
      background: transparent;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-transform: uppercase;
      font-size: 14px;
      color: #353535;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#353535')};
      }
    }
    button + button {
      margin-left: 10px;
      border-radius: 5px;
      background: #2980b9;
      color: #ffff;
      transition: background 0.2s;
      &:hover {
        color: #ffff;
        background: ${shade(0.2, '#557cf2')};
      }
    }
  }
`;
