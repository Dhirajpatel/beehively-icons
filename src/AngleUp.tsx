import React, { SVGProps } from 'react';

interface BiAngleUpProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiAngleUp: React.FC<BiAngleUpProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path
      d="M17.293 15.207 12 9.914l-5.293 5.293-1.414-1.414L10.586 8.5a2 2 0 0 1 2.828 0l5.293 5.293Z"
      data-name="01 align center"
    />
  </svg>
);
export default BiAngleUp;
