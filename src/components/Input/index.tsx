import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </Container>
  );
};
