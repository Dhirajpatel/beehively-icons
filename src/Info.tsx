import React, {SVGProps} from "react";

interface BiInfoProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiInfo: React.FC<BiInfoProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0m0 22a10 10 0 1 1 10-10 10.01 10.01 0 0 1-10 10" />
    <path d="M12 10h-1a1 1 0 0 0 0 2h1v6a1 1 0 0 0 2 0v-6a2 2 0 0 0-2-2" />
    <circle cx={12} cy={6.5} r={1.5} />
  </svg>
);
export default BiInfo;
