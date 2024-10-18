import { useBottomSheet } from '@stores/useBottomSheet';
import { useEffect, useState } from 'react';
import { Sheet } from 'react-modal-sheet';
import styled from 'styled-components';

export const BottomSheetProvider = () => {
  const {
    bottomSheets, // bottomSheet 배열
    closeBottomSheet,
  } = useBottomSheet();

  if (!bottomSheets || bottomSheets.length === 0) {
    return null;
  }

  return (
    <>
      {bottomSheets.map((sheet, index) => (
        <BottomSheet
          key={`BottomSheet:${index + 1}`}
          sheet={sheet}
          index={index}
          closeBottomSheet={closeBottomSheet}
        />
      ))}
    </>
  );
};

type Props = {
  sheet: {
    content: React.ReactNode;
    isOpen: boolean;
    snapPoints?: number[];
    enableDynamicSizing: boolean;
    disableDrag: boolean;
  };
  index: number;
  closeBottomSheet: () => void;
};

const BottomSheet = ({ sheet, index, closeBottomSheet }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    closeBottomSheet();
  };

  useEffect(() => {
    setIsOpen(sheet.isOpen);
  }, [sheet.isOpen]);

  return (
    <Wrapper
      isOpen={isOpen}
      onClose={handleClose}
      detent={sheet.enableDynamicSizing ? 'content-height' : 'full-height'}
      snapPoints={sheet.snapPoints}
      initialSnap={1}
      disableDrag={sheet.disableDrag}
      $index={index}
      style={{
        zIndex: 9999,
      }}
    >
      <Sheet.Container
        style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
      >
        {sheet.enableDynamicSizing ? (
          <Sheet.Content>{sheet.content}</Sheet.Content>
        ) : (
          <Sheet.Content style={{ overflow: 'scroll' }}>
            <Sheet.Scroller>{sheet.content}</Sheet.Scroller>
          </Sheet.Content>
        )}
      </Sheet.Container>
      <Sheet.Backdrop onTap={handleClose} style={{ position: 'static' }} />
    </Wrapper>
  );
};

const Wrapper = styled(Sheet)<{ $index: number }>`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  position: absolute;
  z-index: ${({ $index }) => 1000 + $index};
`;
