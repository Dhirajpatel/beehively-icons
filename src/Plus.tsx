import React, {SVGProps} from "react";

interface BiPlusProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiPlus: React.FC<BiPlusProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M23 11H13V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v10H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h10v10a1 1 0 0 0 1 1 1 1 0 0 0 1-1V13h10a1 1 0 0 0 1-1 1 1 0 0 0-1-1" />
  </svg>
);
export default BiPlus;
