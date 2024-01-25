import React, { SVGProps } from 'react';

interface BiPlusCircleProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiPlusCircle: React.FC<BiPlusCircleProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0m0 22a10 10 0 1 1 10-10 10.01 10.01 0 0 1-10 10m5-10a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 0 1 0-2h3V8a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1" />
  </svg>
);
export default BiPlusCircle;
