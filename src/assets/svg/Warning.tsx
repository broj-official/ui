import type { SVGProps } from 'react';

const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns={'http://www.w3.org/2000/svg'}
    fill={'none'}
    viewBox={'0 0 20 21'}
    width={20}
    height={20}
    {...props}
  >
    <path
      fill={'#FFC400'}
      d={
        'M3.725 18h12.55c1.283 0 2.083-1.392 1.442-2.5L11.442 4.658a1.666 1.666 0 0 0-2.884 0L2.283 15.5c-.641 1.108.159 2.5 1.442 2.5M10 12.167a.836.836 0 0 1-.833-.834V9.667c0-.459.375-.834.833-.834s.833.375.833.834v1.666a.836.836 0 0 1-.833.834m.833 3.333H9.167v-1.667h1.666z'
      }
    />
  </svg>
);
export default SvgWarning;
