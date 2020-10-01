import React, { useRef, useMemo, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import { Datepicker } from '../Datepicker';

export interface FormField {
  id: string;
  label: string;
  properties: any;
  value: any;
  type: string;
  options: any;
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

  const handleParseOptions = useCallback((options: any): any => {
    const arrayPrase = Object.keys(options).map(key => ({
      value: key,
      label: options[key],
    }));
    return arrayPrase;
  }, []);

  return (
    <Form ref={formRef} onSubmit={testHandler} initialData={initialValue}>
      {formFields.map(({ id, label, type, options }) => (
        <React.Fragment key={id}>
          {type === 'string' && (
            <Input name={id} placeholder={label} label={label} type="text" />
          )}
          {type === 'enum' && (
            <Select
              name={id}
              label={label}
              options={handleParseOptions(options)}
            />
          )}
          {type === 'date' && <Datepicker label={label} name={id} />}
          {type === 'long' && (
            <Input type="number" placeholder={label} label={label} name={id} />
          )}
        </React.Fragment>
      ))}
      <Button type="submit">Executar tarefa</Button>
    </Form>
  );
};
