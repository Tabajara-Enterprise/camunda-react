import React, { useCallback } from 'react';
import { FiX, FiCheck } from 'react-icons/fi';
import { useModal } from '../../hooks/modal';
import api from '../../services/api';

import { Container } from './styles';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}
interface UserDeleteProps {
  user: User;
  handleRemoveUserList: (id: string) => void;
}

export const UserDelete: React.FC<UserDeleteProps> = ({
  user,
  handleRemoveUserList,
}) => {
  const { closeModal } = useModal();

  const handleDecline = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const handleConfirm = useCallback(
    async (id: string) => {
      await api.delete(`/v1/users/${id}`);
      closeModal();
      handleRemoveUserList(id);
    },
    [closeModal, handleRemoveUserList],
  );
  return (
    <Container>
      <p>Deseja remover este usuário?</p>
      <div>
        <button type="button" onClick={handleDecline}>
          <FiX size={20} />
          Não, me tire daqui
        </button>
        <button type="button" onClick={() => handleConfirm(user.id)}>
          <FiCheck size={20} />
          Sim, tenho certeza!
        </button>
      </div>
    </Container>
  );
};
