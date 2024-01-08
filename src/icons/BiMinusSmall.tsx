import * as React from "react";
import {IconProps} from "./types";
export const BiMinusSmall = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <rect width={12} height={2} x={6} y={11} rx={1} />
    </svg>
  );
});
export default BiMinusSmall;
