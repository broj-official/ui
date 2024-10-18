import { Check, Checkbox, Unchecked } from '@assets/svg';
import { Flex } from '@components/design/Flex';
import { BROJSize, ColorKeys, FontPresetKeys } from '@styles/theme';
import styled, { useTheme } from 'styled-components';

type CheckBoxSize = BROJSize;
type CheckBoxVariant = 'box' | 'nonbox';

type SizeStyle = {
  width: string;
  height: string;
};

type Props = {
  label?: string;
  font?: FontPresetKeys; // label font
  color?: ColorKeys; // label color
  size?: CheckBoxSize;
  // state?: 'checked' | 'unchecked' | 'indeterminate' | 'error';
  variant?: CheckBoxVariant;
  onClick?: () => void;
  isChecked?: boolean;
};

export const CheckBox = ({
  label,
  font = 'callout3',
  color = 'gray8',
  size = 'md',
  variant = 'box',
  onClick,
  isChecked = false,
}: Props) => {
  const theme = useTheme();
  const SIZE_STYLE: Record<CheckBoxSize, SizeStyle> = {
    xs: {
      width: '',
      height: '',
    },
    sm: {
      width: '',
      height: '',
    },
    md: {
      width: '20px',
      height: '20px',
    },
    lg: {
      width: '24px',
      height: '24px',
    },
  };

  const { width, height } = SIZE_STYLE[size];

  const renderContent = () => {
    switch (variant) {
      case 'box':
        return isChecked ? (
          <Checkbox width={width} height={height} cursor={'pointer'} />
        ) : (
          <Unchecked width={width} height={height} cursor={'pointer'} />
        );
      case 'nonbox':
        return (
          <Check
            width={width}
            height={height}
            iconColor={isChecked ? theme.color.primary6 : theme.color.gray4}
            cursor={'pointer'}
          />
        );
      default:
        return <Unchecked />;
    }
  };

  return (
    <Flex onClick={onClick} align={'center'} gap={12}>
      {renderContent()}

      <Label $font={font} $color={color}>
        {label}
      </Label>
    </Flex>
  );
};

const Label = styled.label<{ $font: FontPresetKeys; $color: ColorKeys }>`
  ${({ theme, $font }) => theme.font[$font]};
  color: ${({ theme, $color }) => theme.color[$color]};
  cursor: pointer;
`;
