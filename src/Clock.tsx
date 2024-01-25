import React, { SVGProps } from 'react';

interface BiClockProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiClock: React.FC<BiClockProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12m0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2m5 10a1 1 0 0 0-1-1h-3V6a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1" />
  </svg>
);
export default BiClock;
