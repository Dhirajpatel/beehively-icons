import React, { SVGProps } from 'react';

interface BiDownloadCloudProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiDownloadCloud: React.FC<BiDownloadCloudProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M18.746 20.334a1 1 0 0 1-.081 1.413l-1.586 1.414a2.9 2.9 0 0 1-2.064.839 3.01 3.01 0 0 1-2.136-.882l-1.544-1.374a1 1 0 0 1 1.33-1.494L14 21.444V14a1 1 0 0 1 2 0v7.445l1.335-1.192a1 1 0 0 1 1.411.081m-.39-12.973a1.09 1.09 0 0 1-.722-.735 8 8 0 0 0-15.489.842 7.66 7.66 0 0 0 .8 5.18A5.45 5.45 0 0 0 .057 18.3 5.84 5.84 0 0 0 5.683 23H8a1 1 0 0 0 0-2H5.683a3.81 3.81 0 0 1-3.646-2.982 3.47 3.47 0 0 1 1.834-3.6 1.993 1.993 0 0 0 .793-2.685 6 6 0 1 1 11.06-4.513 3.1 3.1 0 0 0 2.045 2.052 5.97 5.97 0 0 1 4.212 6.21 5.38 5.38 0 0 1-1.111 2.909 1 1 0 0 0 1.586 1.219 7.47 7.47 0 0 0 1.52-3.972 7.96 7.96 0 0 0-5.62-8.277" />
  </svg>
);
export default BiDownloadCloud;
