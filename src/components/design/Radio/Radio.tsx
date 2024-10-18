import { Flex } from '@components/design/Flex';
import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = {
  label?: string;
  size?: 'md' | 'lg';
  name?: string;
  id?: string;
  value?: string;
  checked?: boolean;
  padding?: number | string;
  isControlled?: boolean;
  onClick?: (value: string) => void;
};

export const Radio = forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      size = 'md',
      name,
      id,
      value,
      checked = false,
      padding = 0,
      isControlled = false,
      onClick,
    }: Props,
    ref,
  ) => {
    return (
      <Flex gap={12} padding={padding}>
        <Input
          ref={ref}
          type={'radio'}
          size={size}
          name={name}
          id={id}
          value={value}
          defaultChecked={isControlled ? undefined : checked}
          checked={isControlled ? checked : undefined}
          onChange={(e) => {
            if (!onClick) {
              return;
            }

            onClick(e.target.value);
          }}
        />
        <Label htmlFor={id}>{label}</Label>
      </Flex>
    );
  },
);

const Input = styled.input<Props>`
  position: relative;
  width: ${({ size = 'md' }) => (size === 'md' ? 20 : 24)}px;
  height: ${({ size = 'md' }) => (size === 'md' ? 20 : 24)}px;

  appearance: none;
  border: 2px solid ${({ theme }) => theme.color.gray4};
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    border-color: ${({ theme }) => theme.color.primary6};
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${({ size = 'md' }) => (size === 'md' ? 12 : 14)}px;
    height: ${({ size = 'md' }) => (size === 'md' ? 12 : 14)}px;
    background-color: ${({ theme }) => theme.color.primary6};
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Label = styled.label`
  ${({ theme }) => theme.font.callout3};
  color: ${({ theme }) => theme.color.gray9};
`;
