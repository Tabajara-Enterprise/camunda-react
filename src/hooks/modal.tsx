import React, { createContext, useCallback, useState, useContext } from 'react';
import { v4 } from 'uuid';
import Modal from '../components/Modal';

export interface ModalContainer {
  id: string;
  type?: string;
  title: string;
  container: React.ComponentType;
}

interface ModalContextData {
  openModal(container: Omit<ModalContainer, 'id'>): void;
  closeModal(): void;
}
const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [modal, setModal] = useState<ModalContainer>({} as ModalContainer);
  const openModal = useCallback(
    ({ title, container }: Omit<ModalContainer, 'id'>) => {
      const modalProps = {
        id: v4(),
        title,
        type: 'default',
        container,
      };
      setModal(modalProps);
    },
    [],
  );
  const closeModal = useCallback(() => {
    setModal({} as ModalContainer);
  }, []);
  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <div style={{ display: modal.id ? 'block' : 'none' }}>
        <Modal modalData={modal} />
      </div>
    </ModalContext.Provider>
  );
};
function useModal(): ModalContextData {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used whitin a ModalProvider');
  }
  return context;
}

export { ModalProvider, useModal };
