import React, { SVGProps } from 'react';

interface BiRotateRightProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiRotateRight: React.FC<BiRotateRightProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M21.962 12.875A10.03 10.03 0 1 1 19.122 5H16a1 1 0 0 0-1 1 1 1 0 0 0 1 1h4.143A1.86 1.86 0 0 0 22 5.143V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v2.078A11.985 11.985 0 1 0 23.95 13.1a1.007 1.007 0 0 0-1-1.1.98.98 0 0 0-.988.875" />
  </svg>
);
export default BiRotateRight;
