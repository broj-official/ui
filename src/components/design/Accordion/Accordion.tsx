import { Arrow } from '@assets/svg';
import { MouseEvent, ReactNode, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

type Props = {
  title?: string;
  content?: string | ReactNode;
};

export const Accordion = ({ title, content }: Props) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsSetOpen] = useState(false);

  const handleButtonClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = '0';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setIsSetOpen(!isOpen);
    },
    [isOpen],
  );

  const parentRefHeight = parentRef.current?.style.height ?? '0px';

  const ArrowButton =
    parentRefHeight === '0px' || parentRefHeight === '' ? (
      <Arrow rotate={'bottom'} />
    ) : (
      <Arrow rotate={'top'} />
    );

  return (
    <Container>
      <Header $isOpen={isOpen} onClick={handleButtonClick}>
        <Text font={'callout2'} color={'gray9'}>
          {title}
        </Text>
        {ArrowButton}
      </Header>
      <ContentsWrapper ref={parentRef}>
        <Contents ref={childRef}>
          <Text font={'footnote3'} color={'gray9'} isKeepAll>
            {content}
          </Text>
        </Contents>
      </ContentsWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 16px 20px;
  background-color: ${({ theme }) => theme.color.gray1};
`;

const Header = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  padding-bottom: ${({ $isOpen }) => $isOpen && '16px'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const ContentsWrapper = styled.div`
  height: 0;
  width: inherit;
  overflow: hidden;
  transition:
    height 0.35s ease,
    background 0.35s ease;
`;

const Contents = styled.div`
  padding: 0.1px;
`;
