import type { SVGProps } from 'react';

const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns={'http://www.w3.org/2000/svg'}
    fill={'none'}
    viewBox={'0 0 20 21'}
    width={20}
    height={20}
    {...props}
  >
    <g clipPath={'url(#check_circle_svg__a)'}>
      <path
        fill={'#34C759'}
        d={
          'M10 2.167A8.336 8.336 0 0 0 1.667 10.5c0 4.6 3.733 8.333 8.333 8.333s8.333-3.733 8.333-8.333S14.6 2.167 10 2.167M7.742 14.075 4.75 11.083a.83.83 0 1 1 1.175-1.175l2.408 2.4 5.734-5.733a.83.83 0 1 1 1.175 1.175l-6.325 6.325a.83.83 0 0 1-1.175 0'
        }
      />
    </g>
    <defs>
      <clipPath id={'check_circle_svg__a'}>
        <path fill={'#fff'} d={'M0 .5h20v20H0z'} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheckCircle;
