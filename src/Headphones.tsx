import React, {SVGProps} from "react";

interface BiHeadphonesProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiHeadphones: React.FC<BiHeadphonesProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M21 12.424V11a9 9 0 0 0-18 0v1.424A5 5 0 0 0 5 22a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2v-1a7 7 0 0 1 14 0v1a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 5 5 0 0 0 2-9.576M5 20a3 3 0 0 1 0-6Zm14 0v-6a3 3 0 0 1 0 6" />
  </svg>
);
export default BiHeadphones;
