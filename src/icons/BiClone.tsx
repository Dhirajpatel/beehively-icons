import * as React from "react";
import {IconProps} from "./types";
export const BiClone = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M19 0h-6c-2.757 0-5 2.243-5 5v6c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5m3 11c0 1.654-1.346 3-3 3h-6c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h6c1.654 0 3 1.346 3 3zm-6 8c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-6c0-2.757 2.243-5 5-5a1 1 0 1 1 0 2c-1.654 0-3 1.346-3 3v6c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3a1 1 0 1 1 2 0" />
    </svg>
  );
});
export default BiClone;
