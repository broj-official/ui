import { ColorKeys, FontPresetKeys } from '@styles/theme';
import { ReactNode } from 'react';
import styled from 'styled-components';

type AlignType = 'center' | 'left' | 'right';
type DecorationType =
  | 'overline'
  | 'line-through'
  | 'underline'
  | 'underline overline';

type Props = {
  font: FontPresetKeys;
  color: ColorKeys;
  children: ReactNode;
  decoration?: DecorationType;
  align?: AlignType;
  isKeepAll?: boolean;
  onClick?: (event?: any) => void;
};

export const Text = ({
  font,
  color,
  children,
  decoration,
  align = 'left',
  isKeepAll = false,
  onClick,
}: Props) => {
  return (
    <CustomText
      $font={font}
      $color={color}
      $decoration={decoration}
      $align={align}
      onClick={onClick}
      $clickable={!!onClick}
      $isKeepAll={isKeepAll}
    >
      {children}
    </CustomText>
  );
};

const CustomText = styled.span<{
  $font: FontPresetKeys;
  $color: ColorKeys;
  $decoration?: DecorationType;
  $align: AlignType;
  $clickable: boolean;
  $isKeepAll: boolean;
}>`
  ${({ theme, $font }) => theme.font[$font]};
  color: ${({ theme, $color }) => theme.color[$color]};
  text-decoration: ${({ $decoration }) => $decoration};
  text-align: ${({ $align }) => $align};

  white-space: pre-wrap;
  word-break: ${({ $isKeepAll }) => ($isKeepAll ? 'keep-all' : 'normal')};

  cursor: ${({ $clickable }) => $clickable && 'pointer'};
`;
