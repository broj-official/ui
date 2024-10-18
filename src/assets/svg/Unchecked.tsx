import type { SVGProps } from 'react';

const SvgUnchecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns={'http://www.w3.org/2000/svg'}
    fill={'none'}
    viewBox={'0 0 20 20'}
    {...props}
  >
    <g clipPath={'url(#unchecked_svg__a)'}>
      <mask
        id={'unchecked_svg__b'}
        width={20}
        height={20}
        x={0}
        y={0}
        maskUnits={'userSpaceOnUse'}
        style={{
          maskType: 'alpha',
        }}
      >
        <path fill={'#D9D9D9'} d={'M0 0h20v20H0z'} />
      </mask>
      <g mask={'url(#unchecked_svg__b)'}>
        <path
          fill={'#E0E0E0'}
          d={
            'm7.958 12.625 7.063-7.062a.81.81 0 0 1 .594-.25q.344 0 .593.25.25.25.25.593 0 .344-.25.594l-7.666 7.667a.8.8 0 0 1-.584.25.8.8 0 0 1-.583-.25l-3.583-3.584a.78.78 0 0 1-.24-.593.85.85 0 0 1 .26-.594.81.81 0 0 1 .594-.25q.344 0 .594.25z'
          }
        />
      </g>
    </g>
    <rect
      width={18.5}
      height={18.5}
      x={0.75}
      y={0.75}
      stroke={'#E0E0E0'}
      strokeWidth={1.5}
      rx={3.25}
    />
    <defs>
      <clipPath id={'unchecked_svg__a'}>
        <rect width={20} height={20} fill={'#fff'} rx={4} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUnchecked;
