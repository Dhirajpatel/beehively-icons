import React, {SVGProps} from "react";

interface BiMoreVerticalProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiMoreVertical: React.FC<BiMoreVerticalProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <circle cx={12} cy={2} r={2} />
    <circle cx={12} cy={12} r={2} />
    <circle cx={12} cy={22} r={2} />
  </svg>
);
export default BiMoreVertical;
