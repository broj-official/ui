import { create } from 'zustand';

export interface ModalComponentProps<P = Record<string, unknown>> {
  Component: React.FC<P>;
  props?: P;
}

interface ModalState {
  modals: ModalComponentProps[];
  openModal: <P extends Record<string, unknown>>(
    Component: React.FC<P>,
    props?: P,
  ) => void;
  closeModal: () => void;
}

export const useModals = create<ModalState>((set) => ({
  modals: [],
  openModal: <P extends Record<string, unknown>>(
    Component: React.FC<P>,
    props?: P,
  ) =>
    set((state) => ({
      modals: [...state.modals, { Component, props } as ModalComponentProps],
    })),
  closeModal: () =>
    set((state) => ({
      modals: state.modals.slice(0, -1),
    })),
}));
