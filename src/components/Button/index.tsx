import React, { ButtonHTMLAttributes } from 'react';

import { FiRotateCw } from 'react-icons/fi';
import { Container, Loading } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  ...rest
}) => {
  return (
    <Container
      disabled={loading}
      isLoading={Number(loading)}
      type="button"
      {...rest}
    >
      {loading ? (
        <Loading>
          <FiRotateCw />
        </Loading>
      ) : (
        children
      )}
    </Container>
  );
};
