import * as React from "react";
import {IconProps} from "./types";
export const BiMoreHorizontal = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <circle cx={2} cy={12} r={2} />
      <circle cx={12} cy={12} r={2} />
      <circle cx={22} cy={12} r={2} />
    </svg>
  );
});
export default BiMoreHorizontal;
