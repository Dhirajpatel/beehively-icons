import * as React from "react";
import {IconProps} from "./types";
export const BiPaintBrush = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M23.1.9a3.14 3.14 0 0 0-4.33 0L7.563 12.1a5.6 5.6 0 0 0-1.058-.1 5.46 5.46 0 0 0-3.885 1.609C1.268 14.962.314 18.592.031 20.563A3 3 0 0 0 3 24a3 3 0 0 0 .439-.031c1.971-.283 5.6-1.237 6.954-2.589a5.5 5.5 0 0 0 1.5-4.941L23.1 5.23a3.07 3.07 0 0 0 0-4.33M8.977 19.966c-.725.725-3.5 1.689-5.824 2.023a1.01 1.01 0 0 1-.859-.283 1 1 0 0 1-.282-.859c.333-2.323 1.3-5.1 2.022-5.824a3.5 3.5 0 0 1 4.943 4.943m12.711-16.15L11.067 14.438a5.4 5.4 0 0 0-1.5-1.508L20.184 2.312a1.086 1.086 0 0 1 1.5 0 1.06 1.06 0 0 1 .004 1.504" />
    </svg>
  );
});
export default BiPaintBrush;
