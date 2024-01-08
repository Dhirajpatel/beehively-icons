import * as React from "react";
import {IconProps} from "./types";
export const BiTableLayout = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M19 2H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5M5 4h14c1.654 0 3 1.346 3 3H2c0-1.654 1.346-3 3-3M2 17V9h5v11H5c-1.654 0-3-1.346-3-3m17 3H9V9h13v8c0 1.654-1.346 3-3 3" />
    </svg>
  );
});
export default BiTableLayout;
