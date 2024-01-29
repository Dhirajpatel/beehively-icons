import React, {SVGProps} from "react";

interface BiAlertCircleProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiAlertCircle: React.FC<BiAlertCircleProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0m0 22a10 10 0 1 1 10-10 10.01 10.01 0 0 1-10 10" />
    <path d="M12 5a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1" />
    <rect width={2} height={2} x={11} y={17} rx={1} />
  </svg>
);
export default BiAlertCircle;
