import React, { SelectHTMLAttributes } from 'react';
import { Container } from './styles';

export interface SelectItemsProps {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectItemsProps[];
  label: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  name,
  label,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option value="null">.: Selecione :.</option>
        {options.map(option => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </Container>
  );
};
