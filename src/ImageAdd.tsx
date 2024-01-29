import React, {SVGProps} from "react";

interface BiImageAddProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiImageAdd: React.FC<BiImageAddProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M12 21a1 1 0 0 1-1 1H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h12c2.757 0 5 2.243 5 5v6a1 1 0 1 1-2 0V5c0-1.654-1.346-3-3-3H5C3.346 2 2 3.346 2 5v6.959l2.808-2.808a3.933 3.933 0 0 1 5.558 0l5.341 5.341a.999.999 0 1 1-1.414 1.414l-5.341-5.341a1.935 1.935 0 0 0-2.73 0L2 14.787V17c0 1.654 1.346 3 3 3h6a1 1 0 0 1 1 1m3-17.5c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3m0 2a1.001 1.001 0 0 0 0 2 1.001 1.001 0 0 0 0-2M23 18h-3v-3a1 1 0 1 0-2 0v3h-3a1 1 0 1 0 0 2h3v3a1 1 0 1 0 2 0v-3h3a1 1 0 1 0 0-2" />
  </svg>
);
export default BiImageAdd;
