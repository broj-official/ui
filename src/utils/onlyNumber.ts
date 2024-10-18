import { KeyboardEvent } from 'react';
import toast from 'react-hot-toast';

export const onlyNumber = (e: KeyboardEvent<HTMLInputElement>) => {
  if (
    !/^[0-9\s]$/.test(e.key) &&
    e.key !== 'Backspace' &&
    e.key !== 'Delete' &&
    e.key !== 'Tab' &&
    e.key !== 'a' &&
    e.key !== 'ArrowUp' &&
    e.key !== 'ArrowDown' &&
    e.key !== 'ArrowLeft' &&
    e.key !== 'ArrowRight' &&
    !e.metaKey
  ) {
    e.preventDefault();
    toast.error('숫자만 입력해주세요');
  }
};
