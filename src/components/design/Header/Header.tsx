import { ArrowBack } from '@assets/svg';
import { Text } from '@components/design/Text';
import { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderProps = {
  children: ReactNode;
  isFixed?: boolean;
};

type ContentProps = {
  children: ReactNode;
};

type LeftProps = {
  children: ReactNode;
};

type IconProps = {
  icon: ReactNode;
};

type BackActionProps = {
  onClick: () => void;
};

type RightProps = {
  children: ReactNode;
  gap?: number;
};

type ActionProps = {
  icon: ReactNode;
  onClick: () => void;
};

export const Header = ({ children, isFixed = false }: HeaderProps) => {
  return <Wrapper $isFixed={isFixed}>{children}</Wrapper>;
};

const Content = ({ children }: ContentProps) => {
  return (
    <ContentWrapper>
      <Text font={'body2'} color={'gray9'}>
        {children}
      </Text>
    </ContentWrapper>
  );
};

const Left = ({ children }: LeftProps) => {
  return <LeftWrapper>{children}</LeftWrapper>;
};

const Icon = ({ icon }: IconProps) => {
  return <div>{icon}</div>;
};

const BackAction = ({ onClick }: BackActionProps) => {
  return (
    <BackActionButton onClick={onClick}>
      <ArrowBack />
    </BackActionButton>
  );
};
const Right = ({ children, gap }: RightProps) => {
  return <RightWrapper $gap={gap ?? 20}>{children}</RightWrapper>;
};

const Action = ({ icon, onClick }: ActionProps) => {
  return <ActionButton onClick={onClick}>{icon}</ActionButton>;
};

Header.Left = Left;
Header.Icon = Icon;
Header.BackAction = BackAction;
Header.Content = Content;
Header.Action = Action;
Header.Right = Right;

const Wrapper = styled.header<{ $isFixed: boolean }>`
  position: ${({ $isFixed }) => ($isFixed ? 'fixed' : 'relative')};
  width: 100%;
  max-width: 600px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ $isFixed, theme }) => $isFixed && theme.color.gray1};

  color: ${({ theme }) => theme.color.gray10};
`;

const LeftWrapper = styled.div`
  position: absolute;
  left: 16px;
  display: flex;
`;

const BackActionButton = styled.button``;

const RightWrapper = styled.div<{ $gap: number }>`
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => `${$gap}px`};
`;

const ActionButton = styled.button`
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 200px;
  text-align: center;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 2줄만 보여지도록
  -webkit-box-orient: vertical; // 내용물을 세로로 배치합니다.
  overflow: hidden; // -webkit-line-clamp와 같이 사용
  word-break: keep-all;
`;
