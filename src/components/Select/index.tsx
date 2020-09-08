import React, { useRef, useEffect } from 'react';
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
  StylesConfig,
  Theme,
} from 'react-select';
import { useField } from '@unform/core';

interface Props extends SelectProps<OptionTypeBase> {
  name: string;
  label: string;
}

export const Select: React.FC<Props> = ({ name, label, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  const colourStyles: StylesConfig = {
    control: styles => ({
      ...styles,
      borderRadius: 5,
      borderColor: '#d3d3d3',
      fontSize: 16,
      height: 47,
    }),
    option: styels => ({
      ...styels,
      color: '#353535',
    }),
  };

  const themeProps = (theme: Theme): Theme => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: '#557cf2',
        neutral0: '#fff',
        primary25: '#557cf2',
        primary50: '#999591',
        neutral80: '#353535',
        neutral30: '#557cf2',
      },
    };
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
      setValue: (ref: any, value: any) => {
        ref.state.value = value;
      },
      clearValue: (ref: any) => {
        ref.state.value = null;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ fontWeight: 'bold' }} htmlFor={name}>
        {label}
      </label>
      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        styles={colourStyles}
        theme={themeProps}
        maxMenuHeight={250}
        placeholder="Selecione..."
        {...rest}
      />
    </div>
  );
};
