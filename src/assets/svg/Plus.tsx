import type { SVGProps } from 'react';

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns={'http://www.w3.org/2000/svg'}
    fill={'none'}
    viewBox={'0 0 16 16'}
    {...props}
  >
    <g clipPath={'url(#plus_svg__a)'}>
      <path
        fill={'#8C8C8C'}
        d={
          'M12 8.667H8.667V12c0 .367-.3.667-.667.667A.67.67 0 0 1 7.333 12V8.667H4A.67.67 0 0 1 3.333 8c0-.367.3-.667.667-.667h3.333V4c0-.366.3-.667.667-.667s.667.3.667.667v3.334H12c.367 0 .667.3.667.666s-.3.667-.667.667'
        }
      />
    </g>
    <defs>
      <clipPath id={'plus_svg__a'}>
        <path fill={'#fff'} d={'M0 0h16v16H0z'} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlus;
