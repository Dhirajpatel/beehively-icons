import React, { SVGProps } from 'react';

interface BiSend2Props extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiSend2: React.FC<BiSend2Props> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M22.858 1.142C21.769.052 20.195-.287 18.722.268L2.328 7.062C.392 7.791-.206 9.598.061 11.064c.268 1.468 1.464 2.948 3.534 2.948h6.379v6.394c0 2.069 1.48 3.266 2.947 3.532q.33.06.674.061c1.309 0 2.708-.674 3.319-2.295l6.83-16.457a3.83 3.83 0 0 0-.886-4.105m-.974 3.369-6.83 16.457c-.346.915-1.145 1.118-1.774 1.004-.632-.115-1.307-.587-1.307-1.565v-7.394a1 1 0 0 0-1-1H3.595c-.979 0-1.451-.675-1.566-1.307s.089-1.429 1.035-1.785l16.394-6.794q.34-.127.68-.127c.481 0 .942.191 1.307.556.535.535.695 1.278.44 1.955Z" />
  </svg>
);
export default BiSend2;
