import React, {SVGProps} from "react";

interface BiPlayProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiPlay: React.FC<BiPlayProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="m20.494 7.968-9.54-7A5 5 0 0 0 3 5v14a5 5 0 0 0 7.957 4.031l9.54-7a5 5 0 0 0 0-8.064Zm-1.184 6.45-9.54 7A3 3 0 0 1 5 19V5a2.95 2.95 0 0 1 1.641-2.672A3 3 0 0 1 8.006 2a2.97 2.97 0 0 1 1.764.589l9.54 7a3 3 0 0 1 0 4.836Z" />
  </svg>
);
export default BiPlay;
