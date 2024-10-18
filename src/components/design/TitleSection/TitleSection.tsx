import { Flex, FlexProps } from '@components/design/Flex';
import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  spaceDirection?: 'top' | 'bottom';
  children: ReactNode;
};

export const TitleSection = ({
  spaceDirection = 'top',
  children,
  ...props
}: Props & FlexProps) => {
  const padding =
    spaceDirection === 'top' ? '32px 20px 8px 20px;' : '8px 20px 32px 20px';

  return (
    <StyledTitleSection padding={padding} {...props}>
      {children}
    </StyledTitleSection>
  );
};

const StyledTitleSection = styled(Flex)``;
