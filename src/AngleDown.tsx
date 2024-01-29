import React, {SVGProps} from "react";

interface BiAngleDownProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiAngleDown: React.FC<BiAngleDownProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M12 15.5a2 2 0 0 1-1.414-.585L5.293 9.621l1.414-1.414L12 13.5l5.293-5.293 1.414 1.414-5.293 5.293A2 2 0 0 1 12 15.5" data-name="01 align center" />
  </svg>
);
export default BiAngleDown;
