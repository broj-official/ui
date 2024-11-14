import { BROJSize, FontPresetKeys } from "@styles/theme";
import { PickRenameMulti } from "@utils/pickRenameMulti";
import { ReactNode, memo, useState } from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";


export type Variant = 'default' | 'filled' | 'light' | 'outline' | 'subtle';
type Size = BROJSize;
type ButtonState = 'default' | 'pressed' | 'disabled';

// main Button 컴포넌트의 Props
type ButtonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  disabled?: boolean;
  topSection?: ReactNode;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  inputType?: 'submit' | 'reset' | 'button' | undefined;
  children?: ReactNode;
  onClick?: (event?: any) => void;
  background?: string;
  color?: string;
  padding?: string | number;
  isSelected?: boolean;
};

// Style에 필요한 Props type
type ButtonStyleProps = {
  background: string;
  color: string;
  border?: string;
  isTopSection?: boolean;
  isSelected?: boolean;
};
type ButtonStateStyles<T extends string> = {
  [K in T]: ButtonStyleProps;
};
type ButtonStyles = ButtonStateStyles<ButtonState>;

type SizeStyleProps = {
  padding: string | number;
  height: string;
  font: FontPresetKeys;
  topSectionHeight: string;
};

type DefaultStyleProps = {
  width: string;
};

const getButtonStyles = (
  theme: DefaultTheme,
): Record<Variant, ButtonStyles> => ({
  default: {
    default: {
      background: theme.color.gray1,
      color: theme.color.gray9,
      border: `1px solid ${theme.color.gray4}`,
    },
    pressed: {
      background: theme.color.gray2,
      color: theme.color.gray9,
      border: `1px solid ${theme.color.gray4}`,
    },
    disabled: {
      background: theme.color.gray2,
      color: theme.color.gray5,
      border: `1px solid ${theme.color.gray3}`,
    },
  },
  filled: {
    default: {
      background: theme.color.primary6,
      color: theme.color.gray1,
    },
    pressed: {
      background: theme.color.primary7,
      color: theme.color.gray1,
    },
    disabled: {
      background: theme.color.gray3,
      color: theme.color.gray5,
    },
  },
  light: {
    default: {
      background: theme.color.primary1,
      color: theme.color.primary6,
    },
    pressed: {
      background: theme.color.primary2,
      color: theme.color.primary6,
    },
    disabled: {
      background: theme.color.gray2,
      color: theme.color.gray5,
    },
  },
  outline: {
    default: {
      background: theme.color.gray1,
      color: theme.color.primary6,
      border: `1px solid ${theme.color.primary6}`,
    },
    pressed: {
      background: theme.color.primary1,
      color: theme.color.primary6,
      border: `1px solid ${theme.color.primary6}`,
    },
    disabled: {
      background: theme.color.gray2,
      color: theme.color.gray5,
      border: `1px solid ${theme.color.gray4}`,
    },
  },
  subtle: {
    default: {
      background: theme.color.gray1,
      color: theme.color.primary6,
    },
    pressed: {
      background: theme.color.primary1,
      color: theme.color.primary6,
    },
    disabled: {
      background: theme.color.gray1,
      color: theme.color.gray5,
    },
  },
});

const SIZE_STYLE: Record<Size, SizeStyleProps> = {
  xs: {
    padding: '0px 12px',
    height: '30px',
    topSectionHeight: '48px',
    font: 'footnote3',
  },
  sm: {
    padding: '0px 16px',
    height: '36px',
    topSectionHeight: '52px',
    font: 'callout3',
  },
  md: {
    padding: '0px 18px',
    height: '42px',
    topSectionHeight: '56px',
    font: 'callout2',
  },
  lg: {
    padding: '0px 22px',
    height: '50px',
    topSectionHeight: '72px',
    font: 'body2',
  },
};

export const Button = memo(
  ({
    variant = 'default',
    size = 'xs',
    fullWidth = false,
    disabled,
    topSection,
    leftSection,
    rightSection,
    inputType = 'button',
    children,
    onClick,
    background: overrideBgColor,
    color: overrideColor,
    padding: overridePadding,
    isSelected = false,
    ...rest
  }: ButtonProps) => {
    const theme = useTheme();
    const [isPressed, setIsPressed] = useState(false);

    const buttonState: ButtonState = disabled
      ? 'disabled'
      : isPressed
        ? 'pressed'
        : 'default';

    const { background, color, border } =
      getButtonStyles(theme)[variant][buttonState];

    const { font, height, topSectionHeight, padding } = SIZE_STYLE[size];

    return (
      <CustomButton
        disabled={disabled}
        type={inputType}
        onClick={onClick}
        onMouseDown={() => setIsPressed(true)} // 버튼을 눌렀을 때 상태 변경
        onMouseUp={() => setIsPressed(false)} // 버튼에서 손을 뗄 때 상태 복구
        onMouseLeave={() => setIsPressed(false)} // 마우스를 벗어났을 때 상태 복구
        $border={border}
        width={fullWidth ? '100%' : 'auto'}
        height={height}
        $topSectionHeight={topSectionHeight}
        $isTopSection={!!topSection}
        $font={font}
        $padding={overridePadding ?? padding}
        $background={overrideBgColor ?? background}
        color={overrideColor ?? color}
        $isSelected={isSelected}
        {...rest}
      >
        {topSection}
        {leftSection}
        {children}
        {rightSection}
      </CustomButton>
    );
  },
);

// To remove for styled component type warning
type RenamedButtonStyleProps = PickRenameMulti<
  ButtonStyleProps,
  {
    background: '$background';
    border: '$border';
    isTopSection: '$isTopSection';
    isSelected: '$isSelected';
  }
>;
type RenamedSizeStyleProps = PickRenameMulti<
  SizeStyleProps,
  { padding: '$padding'; font: '$font'; topSectionHeight: '$topSectionHeight' }
>;

const CustomButton = styled.button<
  RenamedButtonStyleProps & RenamedSizeStyleProps & DefaultStyleProps
>`
  display: flex;
  flex-direction: ${({ $isTopSection }) => ($isTopSection ? 'column' : 'row')};
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width};
  height: ${({ height, $isTopSection, $topSectionHeight }) =>
    $isTopSection ? $topSectionHeight : height};
  padding: ${({ $padding }) => $padding};
  border-radius: 6px;

  background-color: ${({ $background, $isSelected, theme }) =>
    $isSelected ? theme.color.primary1 : $background};
  color: ${({ color, $isSelected, theme }) =>
    $isSelected ? theme.color.primary6 : color};
  border: ${({ $border, $isSelected, theme }) =>
    $isSelected ? `1px solid ${theme.color.primary3}` : $border};

  ${({ theme, $font }) => theme.font[$font]}
  cursor: pointer;

  gap: ${({ $isTopSection }) => ($isTopSection ? '2px' : '6px')};
  white-space: nowrap;

  &:disabled {
    cursor: not-allowed;
  }
`;
