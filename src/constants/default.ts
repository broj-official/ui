import { ReactNode } from 'react';
import { CSSProperties } from 'styled-components';

type ChildrenProps = {
  children?: ReactNode;
};

type DefaultProps = ChildrenProps & {
  key?: number | string;
  className?: string;
  style?: CSSProperties;
};

export type { DefaultProps };
