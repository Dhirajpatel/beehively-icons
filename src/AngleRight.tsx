import React, { SVGProps } from 'react';

interface BiAngleRightProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiAngleRight: React.FC<BiAngleRightProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      d="M10.811 18.707 9.4 17.293 14.689 12 9.4 6.707l1.415-1.414 5.285 5.293a2 2 0 0 1 0 2.828Z"
      data-name="01 align center"
    />
  </svg>
);
export default BiAngleRight;
