import React, { SVGProps } from 'react';

interface BiFaxProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiFax: React.FC<BiFaxProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M11 13.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m1.5 3.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5m5-2c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5m0 5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5M24 6.24V19c0 2.76-2.24 5-5 5H4c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4s4 1.79 4 4h2V4c0-2.21 1.79-4 4-4h3.76c1.07 0 2.07.42 2.83 1.17l2.24 2.24c.74.74 1.17 1.77 1.17 2.83M6 8c0-1.1-.9-2-2-2s-2 .9-2 2v12c0 1.1.9 2 2 2s2-.9 2-2zm6 0h10V6.24c0-.08 0-.16-.02-.24H20c-1.1 0-2-.9-2-2V2.02c-.08 0-.16-.02-.24-.02H14c-1.1 0-2 .9-2 2zm10 2H8v10c0 .73-.2 1.41-.54 2H19c1.65 0 3-1.35 3-3z" />
  </svg>
);
export default BiFax;
