import React, { SVGProps } from 'react';

interface BiCalendarWeekProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiCalendarWeek: React.FC<BiCalendarWeekProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M19 2h-1V1c0-.5-.4-1-1-1-.5 0-1 .4-1 1v1H8V1c0-.6-.4-1-1-1S6 .5 6 1v1H5C2.2 2 0 4.2 0 7v12c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5M4.4 21.9C3.3 21.7 2 20.7 2 19v-9h2.4zM4.4 8H2V7c0-1.7 1.3-2.7 2.4-3zm4.4 14H6.4V10h2.4zm0-14H6.4V4h2.4zm4.4 14h-2.4V10h2.4zm0-14h-2.4V4h2.4zm4.4 14h-2.4V10h2.4zm0-14h-2.4V4h2.4zM22 19c0 1.7-1.3 2.7-2.4 3V10H22zm0-11h-2.4V4c1.1.3 2.4 1.3 2.4 3z" />
  </svg>
);
export default BiCalendarWeek;
