import type { SVGProps } from 'react';

const SvgCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns={'http://www.w3.org/2000/svg'}
    fill={'none'}
    viewBox={'0 0 20 20'}
    {...props}
  >
    <g clipPath={'url(#checked_svg__a)'}>
      <path
        fill={'#FA6400'}
        d={
          'M17.778 0H2.222C1 0 0 1 0 2.222v15.556C0 19 1 20 2.222 20h15.556C19 20 20 19 20 17.778V2.222C20 1 19 0 17.778 0M8.567 14.767a1.107 1.107 0 0 1-1.567 0l-3.989-3.99a1.107 1.107 0 0 1 0-1.566 1.107 1.107 0 0 1 1.567 0l3.2 3.2 7.644-7.644a1.107 1.107 0 1 1 1.567 1.567z'
        }
      />
    </g>
    <defs>
      <clipPath id={'checked_svg__a'}>
        <rect width={20} height={20} fill={'#fff'} rx={4} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheckbox;
