import React, { SVGProps } from 'react';

interface BiHeartRateProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiHeartRate: React.FC<BiHeartRateProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M24 12a1 1 0 0 1-1 1h-2.466c-.452 0-.849.305-.966.74l-1.677 6.242C17.7 20.607 17.166 21 16.55 21h-.017a1.38 1.38 0 0 1-1.324-1.014L11.935 6.76 8.757 17.999c-.191.597-.69.976-1.28.999-.612.033-1.119-.315-1.345-.862l-1.6-4.474a1.005 1.005 0 0 0-.942-.663H1a1 1 0 1 1 0-2h2.591c1.264 0 2.398.799 2.825 1.989l.938 2.626 3.284-11.615c.201-.625.727-1.027 1.361-1a1.385 1.385 0 0 1 1.315 1.012l3.259 13.166 1.062-3.956a3.004 3.004 0 0 1 2.897-2.222h2.466a1 1 0 0 1 1 1Z" />
  </svg>
);
export default BiHeartRate;
