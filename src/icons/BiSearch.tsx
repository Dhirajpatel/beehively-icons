import * as React from "react";
import {IconProps} from "./types";
export const BiSearch = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="m23.707 22.293-5.969-5.969a10.016 10.016 0 1 0-1.414 1.414l5.969 5.969a1 1 0 0 0 1.414-1.414M10 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8" />
    </svg>
  );
});
export default BiSearch;
