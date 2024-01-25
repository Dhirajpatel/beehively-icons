import React, { SVGProps } from 'react';

interface BiTimeForwardProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiTimeForward: React.FC<BiTimeForwardProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M23 11a1 1 0 0 0-1 1 10.034 10.034 0 1 1-2.9-7.021A1 1 0 0 1 19 5h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3V1a1 1 0 0 0-2 0v2.065A11.994 11.994 0 1 0 24 12a1 1 0 0 0-1-1" />
    <path d="M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1" />
  </svg>
);
export default BiTimeForward;
