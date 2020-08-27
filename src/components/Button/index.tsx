import React, { ButtonHTMLAttributes } from 'react';
import { Button as ButtonStyle } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <ButtonStyle type="button" {...rest}>
      {label}
    </ButtonStyle>
  );
};
