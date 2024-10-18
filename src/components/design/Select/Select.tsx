import { useState } from 'react';
import SelectContainer, { Props as SelectProps } from 'react-select';
import styled from 'styled-components';

export type SelectOptionType<T> = { value: T; label: string };
type ActiveType = 'dropdown' | 'bottomsheet';

// Props 타입을 제네릭으로 확장
type Props<T> = {
  options?: SelectOptionType<T>[];
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  type?: ActiveType;
};

export const Select = <T,>({
  options,
  onMenuOpen,
  onMenuClose,
  type = 'dropdown',
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
    <StyledSelect
      classNamePrefix={'react-select'}
      options={options}
      onMenuOpen={onMenuOpen ?? handleOpenMenu}
      onMenuClose={onMenuClose ?? handleCloseMenu}
      isOpen={isOpen}
      menuIsOpen={type === 'bottomsheet' ? false : menuIsOpen}
      isSearchable={isSearchable ?? false}
      {...rest}
    />
  );
};

const StyledSelect = styled(SelectContainer)<{ isOpen: boolean }>`
  // 컨테이너
  .react-select__control {
    box-shadow: none;

    width: 100%;
    height: 21px;
    ${({ theme }) => theme.font.callout3}

    border-radius: 6px;
    border-color: ${({ theme }) => theme.color.gray4};

    &:hover {
      border-color: ${({ theme }) => theme.color.gray10};
    }

    &:active {
      border-color: ${({ theme }) => theme.color.gray4};
      background-color: ${({ theme }) => theme.color.gray2};
    }
  }

  // 옵션
  .react-select__menu {
    border-radius: 0;
    box-shadow: none;

    top: 75%;
    width: 100%;
    ${({ theme }) => theme.font.callout3}

    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border: 1px solid ${({ theme }) => theme.color.gray10};
    border-top-color: ${({ theme }) => theme.color.gray4};

    z-index: 2;

    &:hover {
      background-color: ${({ theme }) => theme.color.gray1};
    }
  }

  // 옵션이 열렸을 때
  .react-select__control--menu-is-open {
    border-radius: 0;

    border-color: ${({ theme }) => theme.color.gray10};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  // 옵션 리스트
  .react-select__menu-list {
    padding: 0;
  }

  // 하나의 옵션
  .react-select__option {
    padding: 12px 10px;
  }

  // 옵션 포커스 될 때
  .react-select__option--is-focused {
    color: ${({ theme }) => theme.color.gray9};
    background-color: ${({ theme }) => theme.color.gray1};
    border-radius: 8px;

    &:active {
      background-color: ${({ theme }) => theme.color.gray1};
      border-radius: 8px;
    }
  }

  // 옵션 선택 될 때
  .react-select__option--is-selected {
    color: ${({ theme }) => theme.color.primary6};
    background-color: ${({ theme }) => theme.color.gray1};

    background-image: url('/svg/check.svg');
    background-repeat: no-repeat;
    background-position: 98%;
    border-radius: 8px;

    opacity: 1;
  }

  // 구분선
  .react-select__indicator-separator {
    display: none;
  }

  // 화살표
  .react-select__dropdown-indicator {
    transform: ${({ isOpen }) => isOpen && 'rotate(-180deg)'};
  }
`;
