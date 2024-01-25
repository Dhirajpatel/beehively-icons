import React, { SVGProps } from 'react';

interface BiCalculatorProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiCalculator: React.FC<BiCalculatorProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M18 24H6a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h12a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm10 8H8a3 3 0 0 1 0-6h8a3 3 0 0 1 0 6M8 6a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm-2 7a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m-8 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m4 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1m8-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1m1 5a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1" />
  </svg>
);
export default BiCalculator;
