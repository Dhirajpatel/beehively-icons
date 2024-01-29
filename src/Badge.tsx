import React, {SVGProps} from "react";

interface BiBadgeProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiBadge: React.FC<BiBadgeProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M20 8a8 8 0 1 0-14 5.274V21.5a2.5 2.5 0 0 0 4.062 1.952l1.626-1.3a.5.5 0 0 1 .624 0l1.626 1.3A2.5 2.5 0 0 0 18 21.5v-8.226A7.96 7.96 0 0 0 20 8m-8-6a6 6 0 1 1-6 6 6.006 6.006 0 0 1 6-6m3.717 19.948a.49.49 0 0 1-.529-.06l-1.626-1.3a2.49 2.49 0 0 0-3.124 0l-1.625 1.3A.5.5 0 0 1 8 21.5v-6.582a7.94 7.94 0 0 0 8 0V21.5a.49.49 0 0 1-.283.448" />
  </svg>
);
export default BiBadge;
