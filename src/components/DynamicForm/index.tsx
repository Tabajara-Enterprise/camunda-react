import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Input } from '../Input';
import { Button } from '../Button';

interface FormField {
  id: string;
  label: string;
  properties: any;
  value: any;
}

interface DynamiFormProps {
  formFields: FormField[];
  onSubmit: (data: any) => any;
}

export const DynamicForm: React.FC<DynamiFormProps> = ({
  formFields,
  onSubmit,
}) => {
  const testHandler = (data: any): any => {
    onSubmit(data);
  };

  const formRef = useRef<FormHandles>(null);
  return (
    <Form ref={formRef} onSubmit={testHandler}>
      {formFields.map(({ id, label }) => (
        <Input
          key={id}
          name={id}
          placeholder={label}
          label={label}
          type="text"
        />
      ))}
      <Button type="submit">Executar tarefa</Button>
    </Form>
  );
};
