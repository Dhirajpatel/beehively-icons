import React, { SVGProps } from 'react';

interface BiScissorsProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiScissors: React.FC<BiScissorsProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M19 14a4.9 4.9 0 0 0-2.352.615L13.3 10.6l7.467-8.96A1 1 0 0 0 19.231.36L12 9.038 4.768.36a1 1 0 0 0-1.536 1.28L10.7 10.6l-3.348 4.015A4.94 4.94 0 0 0 5 14a5 5 0 1 0 5 5 4.95 4.95 0 0 0-1.112-3.1L12 12.162l3.111 3.738A4.96 4.96 0 0 0 14 19a5 5 0 1 0 5-5M5 22a3 3 0 1 1 3-3 3 3 0 0 1-3 3m14 0a3 3 0 1 1 3-3 3 3 0 0 1-3 3" />
  </svg>
);
export default BiScissors;
