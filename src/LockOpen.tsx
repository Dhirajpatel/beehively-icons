import React, {SVGProps} from "react";

interface BiLockOpenProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiLockOpen: React.FC<BiLockOpenProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M10 15v2a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0m13.123-9.006a1.006 1.006 0 0 1-1.103-.885C21.829 3.365 20.283 2 18.5 2 16.57 2 15 3.57 15 5.5v2.918c1.764.773 3 2.536 3 4.582v6c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-6c0-2.757 2.243-5 5-5h8V5.5C13 2.468 15.467 0 18.5 0c2.834 0 5.202 2.103 5.508 4.891a1 1 0 0 1-.885 1.104ZM13 10H5c-1.654 0-3 1.346-3 3v6c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3v-6c0-1.654-1.346-3-3-3" />
  </svg>
);
export default BiLockOpen;
