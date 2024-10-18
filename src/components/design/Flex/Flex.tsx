import { DefaultProps } from '@constants/default';
import { PickRenameMulti } from '@utils/pickRenameMulti';
import styled from 'styled-components';

type FlexDirectionToken = 'column' | 'column-reverse' | 'row' | 'row-reverse';
type FlexWrapToken = 'nowrap' | 'wrap' | 'wrap-reverse';

type justifyContentToken =
  | 'center'
  | 'end'
  | 'start'
  | 'around'
  | 'between'
  | 'evenly'
  | 'stretch'
  | 'normal';
type alignItemsToken =
  | 'baseline'
  | 'center'
  | 'end'
  | 'start'
  | 'stretch'
  | 'normal';

const flexJustifyContentMap = (property?: justifyContentToken) => {
  switch (property) {
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    case 'evenly':
      return 'space-evenly';
    case 'stretch':
      return 'stretch';
    default:
      return 'normal';
  }
};

const flexAlignItemsMap = (property?: alignItemsToken) => {
  switch (property) {
    case 'baseline':
      return 'baseline';
    case 'center':
      return 'center';
    case 'end':
      return 'flex-end';
    case 'start':
      return 'flex-start';
    case 'stretch':
      return 'stretch';
    default:
      return 'normal';
  }
};

export interface FlexProps extends DefaultProps {
  direction?: FlexDirectionToken;
  justify?: justifyContentToken;
  align?: alignItemsToken;
  wrap?: FlexWrapToken;
  grow?: number;
  shrink?: number;
  basis?: string;
  gap?: number;
  padding?: string | number;
  onClick?: () => void;
  fullWidth?: boolean;
}

type DefaultStyleProps = {
  $width: string;
};

export const Flex = ({
  children,
  direction,
  justify,
  align,
  wrap,
  grow,
  shrink,
  basis,
  gap,
  padding,
  fullWidth,
  onClick,
  style,
  ...rest
}: FlexProps) => {
  return (
    <Wrapper
      $direction={direction}
      $justify={justify}
      $align={align}
      wrap={wrap}
      $grow={grow}
      $shrink={shrink}
      $basis={basis}
      $gap={gap}
      $padding={padding}
      style={style}
      onClick={onClick}
      $width={fullWidth ? '100%' : 'auto'}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

type RenamedFlexProps = PickRenameMulti<
  FlexProps,
  {
    direction: '$direction';
    justify: '$justify';
    align: '$align';
    basis: '$basis';
    gap: '$gap';
    grow: '$grow';
    shrink: '$shrink';
    padding: '$padding';
  }
>;

const Wrapper = styled.div<RenamedFlexProps & DefaultStyleProps>`
  width: ${({ $width }) => $width};
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ $justify }) => flexJustifyContentMap($justify)};
  align-items: ${({ $align }) => flexAlignItemsMap($align)};
  flex-wrap: ${({ wrap }) => wrap};
  flex-grow: ${({ $grow }) => $grow};
  flex-shrink: ${({ $shrink }) => $shrink};
  flex-basis: ${({ $basis }) => $basis};
  gap: ${({ $gap }) => $gap && `${$gap}px`};
  padding: ${({ $padding }) => {
    if (typeof $padding === 'string') {
      return $padding;
    }

    if (typeof $padding === 'number') {
      return `${$padding}px`;
    }

    return $padding;
  }};
`;
