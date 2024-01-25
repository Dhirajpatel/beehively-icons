import React, { SVGProps } from 'react';

interface BiFileDeleteProps extends SVGProps<SVGSVGElement> {
  size?: number | number;
  color?: string;
}

const BiFileDelete: React.FC<BiFileDeleteProps> = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    {...props}
  >
    <path d="M15.207 14.207 13.414 16l1.793 1.793a1 1 0 1 1-1.414 1.414L12 17.414l-1.793 1.793a1 1 0 0 1-1.414-1.414L10.586 16l-1.793-1.793a1 1 0 0 1 1.414-1.414L12 14.586l1.793-1.793a1 1 0 0 1 1.414 1.414M22 10.485V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515a6.96 6.96 0 0 1 4.95 2.05l3.484 3.486A6.95 6.95 0 0 1 22 10.485m-6.949-7.021A5 5 0 0 0 14 2.684V7a1 1 0 0 0 1 1h4.316a5 5 0 0 0-.781-1.05ZM20 10.485c0-.165-.032-.323-.047-.485H15a3 3 0 0 1-3-3V2.047c-.162-.015-.321-.047-.485-.047H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z" />
  </svg>
);
export default BiFileDelete;