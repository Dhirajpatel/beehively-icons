import * as React from "react";
import {IconProps} from "./types";
export const BiTablet = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M16 0H8C5.243 0 3 2.243 3 5v14c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5m3 19c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3zm-5 0a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1" />
    </svg>
  );
});
export default BiTablet;
