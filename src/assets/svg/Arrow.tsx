type Props = {
  width?: number;
  height?: number;
  color?: string;
  rotate?: 'top' | 'left' | 'right' | 'bottom';
};

const SvgArrow = ({ width, height, color, rotate }: Props) => {
  const rotationAngle = {
    top: 180,
    left: 90,
    bottom: 0,
    right: 270,
  }[rotate ?? 'bottom'];

  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      fill={'none'}
      viewBox={'0 0 16 16'}
      width={width ?? 16}
      height={height ?? 16}
      style={{ transform: `rotate(${rotationAngle}deg)` }}
    >
      <path
        fill={color ?? '#ABABAB'}
        d={
          'M1.993 4.92a.833.833 0 0 0 0 1.18l5.54 5.54c.26.26.68.26.94 0l5.54-5.54a.833.833 0 0 0 0-1.18.833.833 0 0 0-1.18 0L8 9.747 3.167 4.913a.83.83 0 0 0-1.174.007'
        }
      />
    </svg>
  );
};
export default SvgArrow;
