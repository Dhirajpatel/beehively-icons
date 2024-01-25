import React, { SVGProps } from 'react';

interface BiUserCheckProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiUserCheck: React.FC<BiUserCheckProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M8 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6M8 2c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4m8 20v1a1 1 0 0 1-2 0v-1c0-3.309-2.691-6-6-6s-6 2.691-6 6v1a1 1 0 0 1-2 0v-1c0-4.411 3.589-8 8-8s8 3.589 8 8m7.697-11.783-3.992 3.875c-.581.582-1.368.907-2.205.907s-1.624-.326-2.215-.917l-1.971-1.854a1 1 0 1 1 1.372-1.456l1.992 1.875c.471.47 1.195.449 1.623.021l4.002-3.886a1 1 0 1 1 1.393 1.435Z" />
  </svg>
);
export default BiUserCheck;
