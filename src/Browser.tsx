import React, { SVGProps } from 'react';

interface BiBrowserProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiBrowser: React.FC<BiBrowserProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M19 1H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5M5 3h14a3 3 0 0 1 3 3v1H2V6a3 3 0 0 1 3-3m14 18H5a3 3 0 0 1-3-3V9h20v9a3 3 0 0 1-3 3m0-8a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1m-4 4a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1M3 5a1 1 0 1 1 1 1 1 1 0 0 1-1-1m3 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1m3 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1" />
  </svg>
);
export default BiBrowser;
