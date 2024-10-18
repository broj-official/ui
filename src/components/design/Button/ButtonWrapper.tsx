import styled from 'styled-components';

import { ReactNode } from 'react';

type ButtonWrapperType = 'default' | 'fixed' | 'absolute';
type Props = {
  type?: ButtonWrapperType;
  padding?: number | string;
  children?: ReactNode;
};

export const ButtonWrapper = ({
  type = 'default',
  padding = 20,
  children,
}: Props) => {
  return (
    <Container $padding={padding} $type={type}>
      {children}
    </Container>
  );
};

const Container = styled.div<{
  $padding: number | string;
  $type: ButtonWrapperType;
}>`
  max-width: 600px;
  width: 100%;
  padding: ${({ $padding }) => {
    if (typeof $padding === 'string') {
      return $padding;
    }

    if (typeof $padding === 'number') {
      return `${$padding}px`;
    }

    return $padding;
  }};

  ${({ $type, theme }) => {
    if ($type === 'fixed') {
      return `
        position: fixed;
        bottom: 0;
        padding: 8px 16px calc(8px + env(safe-area-inset-bottom)) 16px;
        background-color: ${theme.color.gray1}};
      `;
    }

    if ($type === 'absolute') {
      return `
        position: absolute;
        bottom: 0;
      `;
    }

    return `
      position: static;
    `;
  }}
`;
