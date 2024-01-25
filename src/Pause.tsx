import React, { SVGProps } from 'react';

interface BiPauseProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiPause: React.FC<BiPauseProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M6.5 0A3.5 3.5 0 0 0 3 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 6.5 0M8 20.5a1.5 1.5 0 0 1-3 0v-17a1.5 1.5 0 0 1 3 0ZM17.5 0A3.5 3.5 0 0 0 14 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 17.5 0M19 20.5a1.5 1.5 0 0 1-3 0v-17a1.5 1.5 0 0 1 3 0Z" />
  </svg>
);
export default BiPause;
