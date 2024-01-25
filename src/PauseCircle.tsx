import React, { SVGProps } from 'react';

interface BiPauseCircleProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiPauseCircle: React.FC<BiPauseCircleProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10M11 9v6a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0m4 0v6a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0" />
  </svg>
);
export default BiPauseCircle;
