import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  background: #2c3e50;
  margin-bottom: 35px;
`;

export const Content = styled.nav`
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
  }
`;

export const Navigation = styled.div`
  /* padding-left: 30px; */
  height: 32px;
  /* border-left: 2px solid #999; */
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    margin-right: 20px;
    font-size: 15px;
    font-weight: bold;
    color: #999;
    transition: color 0.2s;
    &:hover {
      color: #ffff;
    }
  }
`;

export const LogoutContainer = styled.div`
  margin-left: auto;
  button {
    background: transparent;
    border: 1px solid #999;
    padding: 5px 20px;
    color: #999;
    border-radius: 5px;
    text-transform: uppercase;
    transition: all 0.2s;
    &:hover {
      background: #ffff;
      color: #353535;
    }
  }
`;
