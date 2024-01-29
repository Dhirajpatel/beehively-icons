import React, {SVGProps} from "react";

interface BiDiscoverProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiDiscover: React.FC<BiDiscoverProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M21.17 19.756c.524-.791.83-1.738.83-2.756 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.97 4.97 0 0 0 2.756-.83l2.537 2.537a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414zM14 17c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3M6 4.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 6 4.5m4 0a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 10 4.5M19 0H5C2.243 0 0 2.243 0 5v12c0 2.757 2.243 5 5 5h5a1 1 0 1 0 0-2H5c-1.654 0-3-1.346-3-3V9h20v3a1 1 0 1 0 2 0V5c0-2.757-2.243-5-5-5M2 7V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v2z" />
  </svg>
);
export default BiDiscover;
