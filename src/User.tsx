import React, { SVGProps } from 'react';

interface BiUserProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiUser: React.FC<BiUserProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M12 12a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6m0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4M12 14a9.01 9.01 0 0 0-9 9 1 1 0 0 0 2 0 7 7 0 0 1 14 0 1 1 0 0 0 2 0 9.01 9.01 0 0 0-9-9" />
  </svg>
);
export default BiUser;
