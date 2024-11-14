import { BROJSize, FontPresetKeys } from "@styles/theme";
import { onlyNumber } from "@utils/onlyNumber";
import { PickRenameMulti } from "@utils/pickRenameMulti";
import { HTMLInputTypeAttribute, ChangeEvent, forwardRef, ForwardedRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styled, { DefaultTheme, useTheme } from "styled-components";
import { Flex } from "../Flex";
import { Text } from "../Text";


type InputSize = BROJSize;
type InputStatus = 'default' | 'error' | 'disabled';

type SizeStyle = {
  height: string;
  font: FontPresetKeys;
};
type StatusStyle = {
  background: string;
  color: string;
  borderColor: string;
  focusBorderColor: string;
};
type InputFieldStyleProps = {
  height: string;
  color: string;
  borderColor: string;
  background: string;
  focusBorderColor: string;
  font: FontPresetKeys;
  textAlign: 'left' | 'center' | 'right';
};

type InputFieldProps = {
  type?: HTMLInputTypeAttribute;
  size?: InputSize;
  placeholder?: string;
  inputValue?: string;
  disabled?: boolean;
  isError?: boolean;
  errorMessage?: string;
  register?: UseFormRegisterReturn;
  fullWidth?: boolean;
  label?: string;
  subLabel?: string;
  maxLength?: number;
  isOnlyNumber?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  isRequired?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SIZE_STYLE: Record<InputSize, SizeStyle> = {
  xs: {
    height: '30px',
    font: 'footnote3',
  },
  sm: {
    height: '36px',
    font: 'callout3',
  },
  md: {
    height: '42px',
    font: 'body3',
  },
  // 아직 디자인이 나오지 않음 (임시)
  lg: {
    height: '50px',
    font: 'title2',
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

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      type = 'text',
      size = 'sm',
      inputValue,
      placeholder,
      disabled = false,
      isError = false,
      errorMessage,
      register,
      fullWidth = false,
      label,
      subLabel,
      maxLength,
      isOnlyNumber,
      textAlign = 'left',
      isRequired = false,
      onChange,
      ...rest
    },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const theme = useTheme();

    const buttonStatus: InputStatus = disabled
      ? 'disabled'
      : isError
        ? 'error'
        : 'default';

    const { background, color, borderColor, focusBorderColor } =
      getInputStyle(theme)[buttonStatus];

    const { height, font } = SIZE_STYLE[size];

    return (
      <Flex fullWidth={fullWidth} direction={'column'} gap={6} >
        {!!label &&
          (isRequired ? (
            <Text font={'callout3'} color={'gray8'}>
              {label}
              <Text font={'callout3'} color={'primary6'}>
                {' *'}
              </Text>
            </Text>
          ) : (
            <Text font={'callout3'} color={'gray8'}>
              {label}
            </Text>
          ))}
        {!!subLabel && (
          <Text font={'footnote3'} color={'gray8'}>
            {subLabel}
          </Text>
        )}

        <Input
          ref={ref}
          type={type}
          value={inputValue}
          onChange={onChange}
          $height={height}
          $font={font}
          $color={color}
          $background={background}
          $focusBorderColor={focusBorderColor}
          $borderColor={borderColor}
          disabled={disabled}
          placeholder={placeholder}
          maxLength={maxLength}
          onKeyDown={isOnlyNumber ? onlyNumber : undefined}
          inputMode={isOnlyNumber ? 'numeric' : 'text'}
          autoComplete={'off'}
          autoCapitalize={'off'}
          $textAlign={textAlign}
          {...rest}
          {...register}
        />

        {isError && errorMessage && (
          <Text font={'footnote3'} color={'critical6'}>
            {errorMessage}
          </Text>
        )}
      </Flex>
    );
  },
);

type RenamedInputFieldStyleProps = PickRenameMulti<
  InputFieldStyleProps,
  {
    height: '$height';
    color: '$color';
    background: '$background';
    borderColor: '$borderColor';
    focusBorderColor: '$focusBorderColor';
    font: '$font';
    textAlign: '$textAlign';
  }
>;

const Input = styled.input<RenamedInputFieldStyleProps>`
  width: 100%;
  height: ${({ $height }) => $height};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;

  text-align: ${({ $textAlign }) => $textAlign};

  ${({ theme, $font }) => theme.font[$font]}
  color: ${({ $color }) => $color};

  border-radius: 6px;
  border: 1px solid ${({ $borderColor }) => $borderColor};
  background: ${({ $background }) => $background};

  &:focus {
    border-color: ${({ $focusBorderColor }) => $focusBorderColor};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray5};
  }
`;
