import * as React from "react";
import {IconProps} from "./types";
export const BiTrash = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M21 4h-3.1A5.01 5.01 0 0 0 13 0h-2a5.01 5.01 0 0 0-4.9 4H3a1 1 0 0 0 0 2h1v13a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5V6h1a1 1 0 0 0 0-2M11 2h2a3.01 3.01 0 0 1 2.829 2H8.171A3.01 3.01 0 0 1 11 2m7 17a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6h12Z" />
      <path d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1M14 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" />
    </svg>
  );
});
export default BiTrash;
