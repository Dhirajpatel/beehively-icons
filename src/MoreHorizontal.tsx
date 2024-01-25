import React, { SVGProps } from 'react';

interface BiMoreHorizontalProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiMoreHorizontal: React.FC<BiMoreHorizontalProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <circle cx={2} cy={12} r={2} />
    <circle cx={12} cy={12} r={2} />
    <circle cx={22} cy={12} r={2} />
  </svg>
);
export default BiMoreHorizontal;
