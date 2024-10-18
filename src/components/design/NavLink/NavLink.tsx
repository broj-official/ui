import { Arrow } from '@assets/svg';
import { Flex } from '@components/design/Flex';
import { Text } from '@components/design/Text';
import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  link?: () => void;
  label: string;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
  onClick?: () => void;
};

export const NavLink = ({
  link,
  label,
  leftSection,
  rightSection,
  onClick,
}: Props) => {
  return (
    <Container onClick={link ?? onClick}>
      <Flex justify={'between'} padding={'16px 20px'}>
        <Flex gap={8}>
          {leftSection && leftSection}
          <Text font={'callout2'} color={'gray9'}>
            {label}
          </Text>
        </Flex>

        <Flex align={'center'}>
          {rightSection && (
            <Text font={'callout3'} color={'gray7'}>
              {rightSection}
            </Text>
          )}
          <Arrow rotate={'right'} />
        </Flex>
      </Flex>
    </Container>
  );
};

const Container = styled.button`
  width: 100%;
`;
