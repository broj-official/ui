import styled, { DefaultTheme, useTheme } from 'styled-components';

type Props = {
  children: string;
  color: ColorEnum;
};

type TagStyleProps = {
  color: string;
  backgroundColor: string;
};

export type ColorEnum = 'primary' | 'success' | 'critical' | 'gray' | 'warning';

const TagStyle = (theme: DefaultTheme): Record<ColorEnum, TagStyleProps> => ({
  success: {
    color: theme.color.success6,
    backgroundColor: theme.color.success1,
  },
  critical: {
    color: theme.color.critical6,
    backgroundColor: theme.color.critical1,
  },
  gray: { color: theme.color.gray9, backgroundColor: theme.color.gray3 },
  warning: {
    color: theme.color.warning6,
    backgroundColor: theme.color.warning1,
  },
  primary: {
    color: theme.color.primary6,
    backgroundColor: theme.color.primary1,
  },
});

export const Tag = ({ children, color }: Props) => {
  const theme = useTheme();

  const { backgroundColor, color: colorString } = TagStyle(theme)[color];

  return (
    <StyledTag $color={colorString} $backgroundColor={backgroundColor}>
      {children}
    </StyledTag>
  );
};

const StyledTag = styled.div<{ $color: string; $backgroundColor: string }>`
  width: max-content;
  height: 21px;
  padding: 1px 6px;
  border-radius: 8px;
  ${({ theme }) => theme.font.footnote3}
  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  white-space: nowrap;
`;
