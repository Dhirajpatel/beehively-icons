import React, {SVGProps} from "react";

interface BiColumnsProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiColumns: React.FC<BiColumnsProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M19 2H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5m-4 2v16H9V4zM2 17V7c0-1.654 1.346-3 3-3h2v16H5c-1.654 0-3-1.346-3-3m20 0c0 1.654-1.346 3-3 3h-2V4h2c1.654 0 3 1.346 3 3z" />
  </svg>
);
export default BiColumns;
