import React, { SVGProps } from 'react';

interface BiMenuProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiMenu: React.FC<BiMenuProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <rect width={24} height={2} y={11} rx={1} />
    <rect width={24} height={2} y={4} rx={1} />
    <rect width={24} height={2} y={18} rx={1} />
  </svg>
);
export default BiMenu;
