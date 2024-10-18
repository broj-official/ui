import type { SVGProps } from 'react';

const SvgCheck = (
  props: SVGProps<SVGSVGElement> & {
    iconColor?: string;
  },
) => {
  const { iconColor, ...rest } = props;

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 24 24'}
      {...rest}
    >
      <mask
        id={'check_svg__a'}
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits={'userSpaceOnUse'}
        style={{
          maskType: 'alpha',
        }}
      >
        <path fill={'#D9D9D9'} d={'M0 0h24v24H0z'} />
      </mask>
      <g mask={'url(#check_svg__a)'}>
        <path
          fill={iconColor ?? '#FA6400'}
          d={
            'm9.55 15.15 8.475-8.475q.3-.3.713-.3.412 0 .712.3t.3.713q0 .411-.3.712l-9.2 9.2q-.3.3-.7.3a.96.96 0 0 1-.7-.3L4.55 13a.93.93 0 0 1-.288-.713 1.02 1.02 0 0 1 .313-.712q.3-.3.712-.3.413 0 .713.3z'
          }
        />
      </g>
    </svg>
  );
};
export default SvgCheck;
