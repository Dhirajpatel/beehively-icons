import React, { SVGProps } from 'react';

interface BiArrowDownProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiArrowDown: React.FC<BiArrowDownProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M17.71 12.71a1 1 0 0 0-1.42 0L13 16V6a1 1 0 0 0-2 0v10l-3.29-3.29a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l4.3 4.29A2 2 0 0 0 12 19a2 2 0 0 0 1.4-.59l4.3-4.29a1 1 0 0 0 .01-1.41" />
  </svg>
);
export default BiArrowDown;
