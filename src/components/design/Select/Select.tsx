import { useState } from 'react';
import SelectContainer, { Props as SelectProps } from 'react-select';
import styled from 'styled-components';
import { Flex } from '../Flex/Flex';
import { Text } from '../Text/Text';

export type SelectOptionType<T> = { value: T; label: string };
type ActiveType = 'accordion' | 'dropDown' | 'bottomsheet';

// Props 타입을 제네릭으로 확장
type Props<T> = {
  options?: SelectOptionType<T>[];
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  type?: ActiveType;
  label?: string;
  isRequired?: boolean;
  disabled?: boolean;
};

export const Select = <T,>({
  options,
  onMenuOpen,
  onMenuClose,
  type = 'accordion',
  label,
  isRequired,
  disabled,
  ...rest
}: Props<T> & SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { menuIsOpen, isSearchable } = rest;

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <Flex direction={'column'} gap={6} fullWidth>
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
      <StyledSelect
        classNamePrefix={'react-select'}
        options={options}
        onMenuOpen={onMenuOpen ?? handleOpenMenu}
        onMenuClose={onMenuClose ?? handleCloseMenu}
        isOpen={isOpen}
        menuIsOpen={type === 'bottomsheet' ? false : menuIsOpen}
        isSearchable={isSearchable ?? false}
        isDisabled={disabled}
        $type={type}
        {...rest}
      />
    </Flex>
  );
};

const StyledSelect = styled(SelectContainer)<{
  isOpen: boolean;
  $type: ActiveType;
  isDisabled: boolean | undefined;
}>`
  width: 100%;
  .react-select__control--is-disabled {
    background: ${({ theme }) => theme.color.gray2};
    color: ${({ theme }) => theme.color.gray8};
  }

  ${({ $type, isOpen, isDisabled, theme }) => {
    switch ($type) {
      case 'accordion':
        return `
          // 컨테이너
          .react-select__control {
            box-shadow: none;
            width: 100%;
            height: 21px;

            background-color: ${isDisabled ? theme.color.gray2 : theme.color.gray1};

            border-radius: 6px;
            border-color: ${theme.color.gray4};

            &:hover {
              border-color: ${theme.color.gray10};
            }

            &:active {
              border-color: ${theme.color.gray4};
              background-color: ${theme.color.gray2};
            }
          }

          // 옵션
          .react-select__menu {
            border-radius: 0;
            box-shadow: none;
            top: 75%;
            width: 100%;
            ${theme.font.callout3};

            border: 1px solid ${theme.color.gray4};
            background-color: ${theme.color.gray1};

            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            border: 1px solid ${theme.color.gray10};
            border-top-color: ${theme.color.gray4};

            z-index: 2;

            &:hover {
              background-color: ${theme.color.gray1};
            }
          }

          // 옵션이 열렸을 때
          .react-select__control--menu-is-open {
            border-radius: 0;
            border-color: ${theme.color.gray10};
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
          }

          // 옵션 리스트
          .react-select__menu-list {
            padding: 0;
            color: ${theme.color.gray10};
          }

          // 하나의 옵션
          .react-select__option {
            padding: 12px 10px;

            ${theme.font.callout3};

            border-bottom: 1px solid ${theme.color.gray4};

            &:hover {
              border-radius: 0px;
            }
          }

          // 옵션 포커스 될 때
          .react-select__option--is-focused {
            color: ${theme.color.gray9};
            background-color: ${theme.color.gray1};

            &:active {
              background-color: ${theme.color.gray1};
            }
          }

          // 옵션 선택 될 때
          .react-select__option--is-selected {
            color: ${theme.color.primary6};
            background-color: ${theme.color.gray1};

            background-image: url('/svg/check.svg');
            background-repeat: no-repeat;
            background-position: 98%;
            opacity: 1;
          }

          // 구분선
          .react-select__indicator-separator {
            display: none;
          }

          // 화살표
          .react-select__dropdown-indicator {
            transform: ${isOpen ? 'rotate(-180deg)' : 'none'};
          }

           // placeholder 값
          .react-select__placeholder {
            ${theme.font.callout3};
          }

          // 옵션 선택된 값
          .react-select__single-value {
            ${theme.font.callout3};
            color: ${theme.color.gray9};
          }
        `;
      case 'dropDown':
        return `
          // 컨테이너
          .react-select__control {
            box-shadow: none;
            width: 100%;
            height: 21px;

            background-color: ${isDisabled ? theme.color.gray2 : theme.color.gray1};

            border-radius: 6px;
            border-color: ${theme.color.gray4};

            &:hover {
              border-color: ${theme.color.gray10};
            }

            &:active {
              border-color: ${theme.color.gray4};
              background-color: ${theme.color.gray2};
            }
          }

          // 옵션
          .react-select__menu {
            width: 100%;
            ${theme.font.title2};

            border: 1px solid ${theme.color.gray4};
            background-color: ${theme.color.gray1};

            z-index: 2;
          }

          // 옵션이 열렸을 때
          .react-select__control--menu-is-open {
            border-radius: 0;
            border-color: ${theme.color.gray10};
            border-radius: 6px
          }

          // 옵션 리스트
          .react-select__menu-list {
            padding: 0;
            color: ${theme.color.gray10};
          }

          // 하나의 옵션
          .react-select__option {
            padding: 12px 10px;
            padding-left: 35px;

            ${theme.font.callout3};

            &:hover {
              background-color: ${theme.color.gray4};
            }
          }

          // 옵션 포커스 될 때
          .react-select__option--is-focused {
            color: ${theme.color.gray9};
            background-color: ${theme.color.gray1};
            border-radius: 8px;

            &:active {
              background-color: ${theme.color.gray1};
              border-radius: 8px;
            }
          }

          // 옵션 선택 될 때
          .react-select__option--is-selected {
            color: ${theme.color.gray10};
            background-color: ${theme.color.gray1};

            background-image: url('/svg/check.svg');
            background-repeat: no-repeat;
            background-position: 2%;
            border-radius: 8px;
            opacity: 1;
          }

          // 구분선
          .react-select__indicator-separator {
            display: none;
          }

          // 화살표
          .react-select__dropdown-indicator {
            transform: ${isOpen ? 'rotate(-180deg)' : 'none'};
          }

          // placeholder 값
          .react-select__placeholder {
            ${theme.font.callout3};
          }

          // 옵션 선택된 값
          .react-select__single-value {
            ${theme.font.callout3};
            color: ${theme.color.gray9};
          }
        ;`;
      default:
        return 'hi'; // $type이 accordion이 아닐 때 기본 스타일을 지정하지 않음
    }
  }}
`;
