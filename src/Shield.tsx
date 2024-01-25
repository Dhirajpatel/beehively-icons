import React, { SVGProps } from 'react';

interface BiShieldProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiShield: React.FC<BiShieldProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M18.581 2.14 12.316.051a1 1 0 0 0-.632 0L5.418 2.14A4.99 4.99 0 0 0 2 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 0 0 .812 0C12.8 23.74 22 19.563 22 12V6.883a4.99 4.99 0 0 0-3.419-4.743M20 12c0 5.455-6.319 9.033-8 9.889-1.683-.853-8-4.42-8-9.889V6.883a3 3 0 0 1 2.051-2.846L12 2.054l5.948 1.983A3 3 0 0 1 20 6.883Z" />
  </svg>
);
export default BiShield;
