import React, { useRef, useMemo } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';

export interface FormField {
  id: string;
  label: string;
  properties: any;
  value: any;
  type: string;
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

  const initialValue = useMemo(() => {
    return formFields
      .map(formField => ({
        key: formField.id,
        value: formField.value.value,
      }))
      .reduce((obj: any, item) => ((obj[item.key] = item.value), obj), {});
  }, [formFields]);

  const formRef = useRef<FormHandles>(null);

  return (
    <Form ref={formRef} onSubmit={testHandler} initialData={initialValue}>
      {formFields.map(({ id, label, type }) => (
        <>
          {type === 'string' && (
            <Input
              key={id}
              name={id}
              placeholder={label}
              label={label}
              type="text"
            />
          )}
          {type === 'enum' && (
            <Select key={id} name={id} label={label} options={[]} />
          )}
        </>
      ))}
      <Button type="submit">Executar tarefa</Button>
    </Form>
  );
};
