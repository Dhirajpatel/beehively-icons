import React, {SVGProps} from "react";

interface BiCopy2Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiCopy2: React.FC<BiCopy2Props> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M15 20H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h10a5.006 5.006 0 0 1 5 5v10a5.006 5.006 0 0 1-5 5M5 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm19 17V6a1 1 0 0 0-2 0v13a3 3 0 0 1-3 3H6a1 1 0 0 0 0 2h13a5.006 5.006 0 0 0 5-5" />
  </svg>
);
export default BiCopy2;
