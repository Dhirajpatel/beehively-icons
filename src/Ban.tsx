import React, { SVGProps } from 'react';

interface BiBanProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiBan: React.FC<BiBanProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0m0 2a9.95 9.95 0 0 1 6.324 2.262L4.262 18.324A9.992 9.992 0 0 1 12 2m0 20a9.95 9.95 0 0 1-6.324-2.262L19.738 5.676A9.992 9.992 0 0 1 12 22" />
  </svg>
);
export default BiBan;
