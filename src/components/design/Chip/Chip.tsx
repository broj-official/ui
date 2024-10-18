import styled from 'styled-components';

type Props = {
  children: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const Chip = ({ children, isActive = false, onClick }: Props) => {
  return (
    <StyledChip $isActive={isActive} onClick={onClick}>
      {children}
    </StyledChip>
  );
};

const StyledChip = styled.span<{ $isActive: boolean }>`
  padding: 6px 12px;
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.primary6 : theme.color.gray10};
  border: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.color.primary6 : theme.color.gray4};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.color.primary1 : theme.color.gray1};
  border-radius: 999px;
  ${({ theme }) => theme.font.callout3}

  cursor: pointer;
  user-select: none;
`;
