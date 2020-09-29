import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { useField } from '@unform/core';
import 'react-datepicker/dist/react-datepicker.css';
import { Container } from './styles';

interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
  name: string;
  label: string;
}
export const Datepicker: React.FC<Props> = ({ name, label, ...rest }) => {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(defaultValue || null);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref: any) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <ReactDatePicker
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        placeholderText={label}
        {...rest}
      />
    </Container>
  );
};
