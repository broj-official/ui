import styled from 'styled-components';

interface WidthProps {
  size: number;
}

interface HeightProps {
  size: number;
}

export const MarginWidth = styled.div<WidthProps>`
  width: ${({ size }) => size}px;
`;

export const MarginHeight = styled.div<HeightProps>`
  height: ${({ size }) => size}px;
`;
