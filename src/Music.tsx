import React, { SVGProps } from 'react';

interface BiMusicProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiMusic: React.FC<BiMusicProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M22.554.923A3.98 3.98 0 0 0 19.263.07l-9.184 1.722A5 5 0 0 0 6 6.706v9.85A3.96 3.96 0 0 0 4 16a4 4 0 1 0 4 4v-9.124A2 2 0 0 1 9.632 8.91l11.183-2.1A1 1 0 0 1 22 7.8v5.76a3.96 3.96 0 0 0-2-.56 4 4 0 1 0 4 4V4A3.99 3.99 0 0 0 22.554.923M4 22a2 2 0 1 1 2-2 2 2 0 0 1-2 2M20.447 4.848 9.263 6.944A4 4 0 0 0 8 7.416v-.71a3 3 0 0 1 2.447-2.949l9.185-1.722A2 2 0 0 1 22 4v.984a2.96 2.96 0 0 0-1.553-.136M20 19a2 2 0 1 1 2-2 2 2 0 0 1-2 2" />
  </svg>
);
export default BiMusic;
