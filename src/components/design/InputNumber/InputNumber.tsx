import { Minus, Plus } from '@assets/svg';
import { FontPresetKeys } from '@styles/theme';
import { onlyNumber } from '@utils/onlyNumber';
import { PickRenameMulti } from '@utils/pickRenameMulti';
import { ChangeEvent } from 'react';
import styled, { DefaultTheme, useTheme } from 'styled-components';

type InputNumberSizeType = 'xs' | 'sm' | 'md';
type InputStatus = 'default' | 'error' | 'disabled';
type StatusStyle = {
  background: string;
  color: string;
  borderColor: string;
  focusBorderColor: string;
};

type InputFieldStyleProps = {
  width: string;
  height: string;
  color: string;
  borderColor: string;
  background: string;
  focusBorderColor: string;
  font: FontPresetKeys;
};
type SizeStyle = {
  width: string;
  height: string;
  buttonSize: number;
  buttonPosition: string;
  font: FontPresetKeys;
};

type Props = {
  size?: InputNumberSizeType;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // e.target.value할때 Number 타입으로 변경하여 사용
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
};

const SIZE_STYLE: Record<InputNumberSizeType, SizeStyle> = {
  xs: {
    width: '97px',
    height: '30px',
    buttonSize: 16,
    buttonPosition: '7px',
    font: 'footnote3',
  },
  sm: {
    width: '109px',
    height: '36px',
    buttonSize: 20,
    buttonPosition: '8px',
    font: 'callout3',
  },
  md: {
    width: '121px',
    height: '42px',
    buttonSize: 24,
    buttonPosition: '10px',
    font: 'body3',
  },
};

const getInputStyle = (
  theme: DefaultTheme,
): Record<InputStatus, StatusStyle> => ({
  default: {
    background: theme.color.gray1,
    color: theme.color.gray9,
    borderColor: theme.color.gray4,
    focusBorderColor: theme.color.gray8,
  },
  error: {
    background: theme.color.gray1,
    color: theme.color.critical6,
    borderColor: theme.color.critical6,
    focusBorderColor: theme.color.critical6,
  },
  disabled: {
    background: theme.color.gray2,
    color: theme.color.gray8,
    borderColor: theme.color.gray4,
    focusBorderColor: theme.color.gray4,
  },
});

export const InputNumber = ({
  size = 'sm',
  value,
  onChange,
  placeholder = '수량',
  disabled = false,
  isError = false,
}: Props) => {
  const theme = useTheme();

  const buttonStatus: InputStatus = disabled
    ? 'disabled'
    : isError
      ? 'error'
      : 'default';

  const { background, color, borderColor, focusBorderColor } =
    getInputStyle(theme)[buttonStatus];

  const { width, height, buttonSize, buttonPosition, font } = SIZE_STYLE[size];

  // 마이너스
  const handleMinus = () => {
    if (disabled) {
      return;
    }

    if (value > 1) {
      const event = {
        target: { value: value - 1 },
      } as unknown as ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
  };

  // 플러스
  const handlePlus = () => {
    if (disabled) {
      return;
    }

    const event = {
      target: { value: value + 1 },
    } as unknown as ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  // maxLength 설정을 위한 로직
  const handleMaxLength = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };

  return (
    <Container>
      <StyledInput
        type={'number'}
        placeholder={placeholder}
        value={value === 0 ? '' : value} // value가 0일 때 빈 문자열로 표시
        onChange={onChange}
        maxLength={4}
        onInput={handleMaxLength}
        disabled={disabled}
        onKeyDown={onlyNumber}
        $width={width}
        $height={height}
        $background={background}
        $color={color}
        $borderColor={borderColor}
        $focusBorderColor={focusBorderColor}
        $font={font}
      />
      <StyledMinus
        $buttonPosition={buttonPosition}
        width={buttonSize}
        height={buttonSize}
        onClick={handleMinus}
        onMouseDown={(e) => e.preventDefault()}
        $disabled={disabled}
      />
      <StyledPlus
        $buttonPosition={buttonPosition}
        width={buttonSize}
        height={buttonSize}
        onClick={handlePlus}
        onMouseDown={(e) => e.preventDefault()}
        $disabled={disabled}
      />
    </Container>
  );
};

type RenamedInputFieldStyleProps = PickRenameMulti<
  InputFieldStyleProps,
  {
    width: '$width';
    height: '$height';
    color: '$color';
    background: '$background';
    borderColor: '$borderColor';
    focusBorderColor: '$focusBorderColor';
    font: '$font';
  }
>;

const Container = styled.div`
  position: relative;
`;

const StyledInput = styled.input<RenamedInputFieldStyleProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  padding: 0px 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${({ theme, $font }) => theme.font[$font]};
  text-align: center;
  color: ${({ $color }) => $color};

  border: 1px solid ${({ $borderColor }) => $borderColor};
  border-radius: 6px;
  background: ${({ $background }) => $background};

  &:focus {
    border-color: ${({ $focusBorderColor }) => $focusBorderColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray5};
  }

  /* type = 'number'일 때, 오른쪽 버튼 삭제 */
  &::-webkit-inner-spin-button {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

const StyledMinus = styled(Minus)<{
  $buttonPosition: string;
  $disabled: boolean;
}>`
  position: absolute;
  top: ${({ $buttonPosition }) => $buttonPosition};
  left: ${({ $buttonPosition }) => $buttonPosition};
  cursor: ${({ $disabled }) => !$disabled && 'pointer'};
`;

const StyledPlus = styled(Plus)<{
  $buttonPosition: string;
  $disabled: boolean;
}>`
  position: absolute;
  top: ${({ $buttonPosition }) => $buttonPosition};
  right: ${({ $buttonPosition }) => $buttonPosition};
  cursor: ${({ $disabled }) => !$disabled && 'pointer'};
`;
