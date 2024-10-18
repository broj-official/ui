import { ReactNode } from 'react';
import { create } from 'zustand';

export interface BottomSheetComponentProps {
  content: ReactNode;
  snapPoints?: number[];
  enableDynamicSizing?: boolean;
  disableDrag?: boolean;
}

interface BottomSheetState {
  bottomSheets: Array<{
    content: ReactNode;
    isOpen: boolean;
    snapPoints?: number[];
    enableDynamicSizing: boolean;
    disableDrag: boolean;
  }>;
  openBottomSheet: ({
    content,
    snapPoints,
    enableDynamicSizing,
    disableDrag,
  }: BottomSheetComponentProps) => void;
  closeBottomSheet: () => void;
}

export const useBottomSheet = create<BottomSheetState>((set) => ({
  bottomSheets: [], // 여러 개의 bottomSheet을 관리하는 배열
  openBottomSheet: ({
    content,
    snapPoints = undefined,
    enableDynamicSizing = true,
    disableDrag = false,
  }: BottomSheetComponentProps) =>
    set((state) => ({
      bottomSheets: [
        ...state.bottomSheets,
        {
          content,
          isOpen: true,
          snapPoints, // 새로운 bottomSheet의 snapPoints 저장
          enableDynamicSizing, // 새로운 bottomSheet의 enableDynamicSizing 저장
          disableDrag,
        },
      ],
    })),
  closeBottomSheet: () => {
    set((state) => ({
      bottomSheets: state.bottomSheets.map((sheet, index, sheets) =>
        index === sheets.length - 1
          ? { ...sheet, isOpen: false } // 먼저 isOpen을 false로 설정해 애니메이션 트리거
          : sheet,
      ),
    }));

    // 애니메이션 후 상태를 업데이트 (500ms 후에 마지막 sheet 제거)
    setTimeout(() => {
      set((state) => ({
        bottomSheets: state.bottomSheets.slice(0, -1),
      }));
    }, 300); // 애니메이션이 완료되는 시간을 늘려서 300ms로 설정
  },
}));
