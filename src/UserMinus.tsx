import React, { SVGProps } from 'react';

interface BiUserMinusProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiUserMinus: React.FC<BiUserMinusProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M8 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6M8 2c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4m8 20v1a1 1 0 1 1-2 0v-1c0-3.309-2.691-6-6-6s-6 2.691-6 6v1a1 1 0 1 1-2 0v-1c0-4.411 3.589-8 8-8s8 3.589 8 8m8-10a1 1 0 0 1-1 1h-7a1 1 0 1 1 0-2h7a1 1 0 0 1 1 1" />
  </svg>
);
export default BiUserMinus;
