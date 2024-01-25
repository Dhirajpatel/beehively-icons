import React, { SVGProps } from 'react';

interface BiAngleLeftProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiAngleLeft: React.FC<BiAngleLeftProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      d="m13.775 18.707-5.293-5.293a2 2 0 0 1 0-2.828l5.293-5.293 1.414 1.414L9.9 12l5.293 5.293Z"
      data-name="01 align center"
    />
  </svg>
);
export default BiAngleLeft;
