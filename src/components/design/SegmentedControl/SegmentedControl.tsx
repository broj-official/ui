import styled from "styled-components";
import { Text } from "@components/design/Text";

type optionType = { id: number; label: string; value: string };

type Props = {
  options: optionType[];
  value: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick: (value: any) => void;
};

export const SegmentedControl = ({
  options,
  value,
  disabled = false,
  fullWidth = false,
  onClick,
}: Props) => {
  return (
    <Container>
      {options.map((val) => (
        <StyledButton
          key={val.id}
          $isSelect={value === val.value}
          disabled={disabled}
          $fullWidth={fullWidth}
          onClick={() => onClick(val.value)}
        >
          <Text
            font={"callout3"}
            color={value === val.value ? "gray9" : "gray8"}
          >
            {val.label}
          </Text>
        </StyledButton>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.gray3};
`;

const StyledButton = styled.button<{ $isSelect: boolean; $fullWidth: boolean }>`
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "fit-content")};
  height: 28px;
  padding: 4px 8px;

  border-radius: 4px;
  background-color: ${({ $isSelect, theme }) =>
    $isSelect ? theme.color.gray1 : theme.color.gray3};
  cursor: pointer;
  border: none;
  outline: none;
`;
