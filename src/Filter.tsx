import React, {SVGProps} from "react";

interface BiFilterProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiFilter: React.FC<BiFilterProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M14 24a1 1 0 0 1-.6-.2l-4-3A1 1 0 0 1 9 20v-5.62L1.984 6.487A3.9 3.9 0 0 1 4.9 0h14.2a3.9 3.9 0 0 1 2.913 6.488L15 14.38V23a1 1 0 0 1-1 1m-3-4.5 2 1.5v-7a1 1 0 0 1 .253-.664l7.268-8.177A1.9 1.9 0 0 0 19.1 2H4.9a1.9 1.9 0 0 0-1.421 3.158l7.269 8.178A1 1 0 0 1 11 14z" />
  </svg>
);
export default BiFilter;
