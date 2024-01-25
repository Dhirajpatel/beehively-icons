import React, { SVGProps } from 'react';

interface BiMinusProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiMinus: React.FC<BiMinusProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <rect width={12} height={2} x={6} y={11} rx={1} />
  </svg>
);
export default BiMinus;
