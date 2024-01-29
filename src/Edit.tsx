import React, {SVGProps} from "react";

interface BiEditProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiEdit: React.FC<BiEditProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M18.656.93 6.464 13.122A4.97 4.97 0 0 0 5 16.657V18a1 1 0 0 0 1 1h1.343a4.97 4.97 0 0 0 3.535-1.464L23.07 5.344a3.125 3.125 0 0 0 0-4.414 3.194 3.194 0 0 0-4.414 0m3 3L9.464 16.122A3.02 3.02 0 0 1 7.343 17H7v-.343a3.02 3.02 0 0 1 .878-2.121L20.07 2.344a1.15 1.15 0 0 1 1.586 0 1.123 1.123 0 0 1 0 1.586" />
    <path d="M23 8.979a1 1 0 0 0-1 1V15h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h9.042a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.97 4.97 0 0 0 3.536-1.464l2.656-2.658A4.97 4.97 0 0 0 24 16.343V9.979a1 1 0 0 0-1-1m-4.535 12.143a2.98 2.98 0 0 1-1.465.8V18a1 1 0 0 1 1-1h3.925a3 3 0 0 1-.8 1.464Z" />
  </svg>
);
export default BiEdit;
