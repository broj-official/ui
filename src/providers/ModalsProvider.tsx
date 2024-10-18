import { useModals } from '@stores/useModals';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export const ModalsProvider = () => {
  const { modals, closeModal } = useModals();

  return (
    <>
      {modals.map((modal) => {
        const { Component, props } = modal;
        return createPortal(
          <Container key={String(modal)} id={'modal'}>
            <BackDropWrapper onClick={closeModal} />
            <Component {...props} />
          </Container>,
          document.body,
        );
      })}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
`;

const BackDropWrapper = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 600px;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.gray10};
  opacity: 0.3;
  z-index: 2;
`;
