import React, { SVGProps } from 'react';

interface BiPhoneProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiPhone: React.FC<BiPhoneProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="m1.8 1.8 1-.9C4-.3 6-.3 7.2.9l1.9 2.4c1.1 1.2 1.1 3.1 0 4.3L8 9.1c1.5 3.3 3.7 5.6 6.9 6.9l1.5-1.2c1.2-1.1 3.1-1.1 4.3 0l2.4 1.9c1.2 1.2 1.2 3.2.1 4.3l-1 1.1C21 23.4 19.4 24 17.8 24 10.1 24 0 13.9 0 6.2 0 4.6.6 3 1.8 1.8m16 20.2c1.1 0 2.2-.4 2.9-1.1l1-1.1c.4-.4.4-1.1 0-1.5 0 0-2.4-1.8-2.4-1.9-.4-.4-1.1-.4-1.6 0l-2 1.6c-.3.2-.7.3-1 .1-4.1-1.6-7.1-4.5-8.8-8.8-.1-.3-.1-.7.1-1l1.6-2c.4-.4.4-1.1 0-1.6L5.7 2.3c-.3-.4-1-.4-1.5.1l-1 .9C2.4 4 2 5.1 2 6.2c0 7 9.8 15.8 15.8 15.8" />
  </svg>
);
export default BiPhone;
