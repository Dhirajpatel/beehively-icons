import React, { SVGProps } from 'react';

interface BiPictureProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiPicture: React.FC<BiPictureProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5M5 2h14a3 3 0 0 1 3 3v14a2.95 2.95 0 0 1-.3 1.285l-9.163-9.163a5 5 0 0 0-7.072 0L2 14.586V5a3 3 0 0 1 3-3m0 20a3 3 0 0 1-3-3v-1.586l4.878-4.878a3 3 0 0 1 4.244 0l9.163 9.164A2.95 2.95 0 0 1 19 22Z" />
    <path d="M16 10.5A3.5 3.5 0 1 0 12.5 7a3.5 3.5 0 0 0 3.5 3.5m0-5A1.5 1.5 0 1 1 14.5 7 1.5 1.5 0 0 1 16 5.5" />
  </svg>
);
export default BiPicture;
