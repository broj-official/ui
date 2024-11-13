import { Minus, Plus } from "@assets/svg";
import { Flex } from "@components/design/Flex";
import { Text } from "@components/design/Text";
import { FontPresetKeys } from "@styles/theme";
import { onlyNumber } from "@utils/onlyNumber";
import { PickRenameMulti } from "@utils/pickRenameMulti";
import { ChangeEvent } from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";

type InputNumberSizeType = "xs" | "sm" | "md";
type InputStatus = "default" | "error" | "disabled";
type ButtonAlign = "default" | "bothSide";
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
  buttonAlign: ButtonAlign;
};
type SizeStyle = {
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
  label?: string;
  isRequired?: boolean;
  buttonAlign?: ButtonAlign;
  unitLabel?: string;
  name: string;
};

const SIZE_STYLE: Record<InputNumberSizeType, SizeStyle> = {
  xs: {
    height: "30px",
    buttonSize: 16,
    buttonPosition: "7px",
    font: "footnote3",
  },
  sm: {
    height: "36px",
    buttonSize: 20,
    buttonPosition: "8px",
    font: "callout3",
  },
  md: {
    height: "42px",
    buttonSize: 24,
    buttonPosition: "9px",
    font: "body3",
  },
};

const getInputStyle = (
  theme: DefaultTheme
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
  size = "sm",
  value,
  onChange,
  placeholder,
  disabled = false,
  isError = false,
  buttonAlign = "default",
  label,
  isRequired = false,
  unitLabel = "",
  name,
}: Props) => {
  const theme = useTheme();

  const buttonStatus: InputStatus = disabled
    ? "disabled"
    : isError
    ? "error"
    : "default";

  const { background, color, borderColor, focusBorderColor } =
    getInputStyle(theme)[buttonStatus];

  const { buttonSize, height, font } = SIZE_STYLE[size];

  // 마이너스
  const handleMinus = () => {
    if (disabled) {
      return;
    }

    if (value > 1) {
      const event = {
        target: { name, value: value - 1 },
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
      target: { name, value: value + 1 },
    } as unknown as ChangeEvent<HTMLInputElement>;
    onChange(event);
  };

  return (
    <Flex direction={"column"} gap={6} fullWidth>
      {!!label &&
        (isRequired ? (
          <Text font={"callout3"} color={"gray8"}>
            {label}
            <Text font={"callout3"} color={"primary6"}>
              {" *"}
            </Text>
          </Text>
        ) : (
          <Text font={"callout3"} color={"gray8"}>
            {label}
          </Text>
        ))}
      <Container
        $borderColor={borderColor}
        $background={background}
        $buttonAlign={buttonAlign}
        $unitLabel={unitLabel}
      >
        <StyledMinus
          width={buttonSize}
          height={buttonSize}
          onClick={handleMinus}
          $disabled={disabled}
          $buttonAlign={buttonAlign}
          $unitLabel={unitLabel}
        />
        <StyledPlus
          width={buttonSize}
          height={buttonSize}
          onClick={handlePlus}
          $disabled={disabled}
          $buttonAlign={buttonAlign}
          $unitLabel={unitLabel}
        />
        <StyledInput
          type={"number"}
          placeholder={placeholder}
          value={value === 0 ? "" : value} // value가 0일 때 빈 문자열로 표시
          onChange={onChange}
          disabled={disabled}
          onKeyDown={onlyNumber}
          $height={height}
          $background={background}
          $color={color}
          $borderColor={borderColor}
          $focusBorderColor={focusBorderColor}
          $font={font}
          $buttonAlign={buttonAlign}
          name={name}
        />
        {buttonAlign === "default" && !!unitLabel && (
          <StyledText font={"callout3"} color={"gray9"}>
            {unitLabel}
          </StyledText>
        )}
      </Container>
    </Flex>
  );
};

type RenamedInputFieldStyleProps = PickRenameMulti<
  InputFieldStyleProps,
  {
    height: "$height";
    color: "$color";
    background: "$background";
    borderColor: "$borderColor";
    focusBorderColor: "$focusBorderColor";
    font: "$font";
    buttonAlign: "$buttonAlign";
  }
>;

const Container = styled.div<{
  $borderColor: string;
  $background: string;
  $buttonAlign: ButtonAlign;
  $unitLabel: string;
}>`
  display: grid;
  grid-template-columns: ${({ $buttonAlign, $unitLabel }) =>
    $buttonAlign === "default"
      ? $unitLabel
        ? "1fr auto auto auto" // unitLabel이 있을 때, 텍스트 먼저 배치
        : "2fr auto auto" // unitLabel이 없을 때
      : "24px 1fr 24px"};
  align-items: center;
  column-gap: 4px; /* 각 아이템 사이의 간격 */
  border: 1px solid ${({ $borderColor }) => $borderColor};
  background: ${({ $background }) => $background};
  border-radius: 6px;
  padding: 0px 16px;
`;

const StyledInput = styled.input<RenamedInputFieldStyleProps>`
  width: 100%;
  height: ${({ $height }) => $height};
  padding: 0px 10px;

  ${({ theme, $font }) => theme.font[$font]};
  text-align: ${({ $buttonAlign }) =>
    $buttonAlign === "default" ? "right" : "center"};
  color: ${({ $color }) => $color};
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

const StyledText = styled(Text)`
  grid-area: "1 / 1 / 1 / 2"; // 첫 번째 그리드 위치
`;

const StyledMinus = styled(Minus)<{
  $disabled: boolean;
  $buttonAlign: ButtonAlign;
  $unitLabel: string;
}>`
  cursor: ${({ $disabled }) => (!$disabled ? "pointer" : "not-allowed")};
  grid-area: ${({ $buttonAlign, $unitLabel }) =>
    $buttonAlign === "default"
      ? $unitLabel
        ? "1 / 3 / 2 / 4" // unitLabel이 있을 때 Minus가 세 번째 그리드 위치
        : "1 / 2 / 2 / 3" // unitLabel이 없을 때 Minus가 두 번째 그리드 위치
      : "1 / 1 / 2 / 2"};
`;

const StyledPlus = styled(Plus)<{
  $disabled: boolean;
  $buttonAlign: ButtonAlign;
  $unitLabel: string;
}>`
  cursor: ${({ $disabled }) => (!$disabled ? "pointer" : "not-allowed")};
  grid-area: ${({ $buttonAlign, $unitLabel }) =>
    $buttonAlign === "default"
      ? $unitLabel
        ? "1 / 4 / 2 / 5" // unitLabel이 있을 때 Plus가 네 번째 그리드 위치
        : "1 / 3 / 2 / 4" // unitLabel이 없을 때 Plus가 세 번째 그리드 위치
      : "1 / 3 / 2 / 4"};
`;
