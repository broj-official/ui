import styled from 'styled-components';

type Variant = 'thick' | 'thin' | 'vertical';

type Props = {
  variant?: Variant;
};

type SizeStyle = {
  width: string;
  height: string;
};

const DividerStyle: Record<Variant, SizeStyle> = {
  thick: {
    width: '100%',
    height: '8px',
  },
  thin: {
    width: '100%',
    height: '2px',
  },
  vertical: {
    width: '2px',
    height: '32px',
  },
};

export const Divider = ({ variant = 'thick' }: Props) => {
  const { width, height } = DividerStyle[variant];

  return <CustomDivider $width={width} $height={height} />;
};

const CustomDivider = styled.div<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: ${({ theme }) => theme.color.gray2};
`;
