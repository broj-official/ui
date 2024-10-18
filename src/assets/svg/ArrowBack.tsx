import type { SVGProps } from 'react';

const SvgArrowBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns={'http://www.w3.org/2000/svg'}
    fill={'none'}
    viewBox={'0 0 24 25'}
    width={24}
    height={24}
    {...props}
  >
    <g clipPath={'url(#arrow_back_svg__a)'}>
      <path
        fill={'#3F3F3F'}
        d={
          'M19 11.25H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41l-4.88-4.88H19c.55 0 1-.45 1-1s-.45-1-1-1'
        }
      />
    </g>
    <defs>
      <clipPath id={'arrow_back_svg__a'}>
        <path fill={'#fff'} d={'M0 .25h24v24H0z'} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgArrowBack;
