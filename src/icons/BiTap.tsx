import * as React from "react";
import {IconProps} from "./types";
export const BiTap = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M22 19.279V23a1 1 0 1 1-2 0v-3.721a3.01 3.01 0 0 0-2.412-2.942l-6.784-1.357A1 1 0 0 1 10 14V7.107c0-.538-.362-1.018-.824-1.092A.998.998 0 0 0 8 7v13.638a1 1 0 0 1-1.623.782l-2.637-2.1c-.463-.428-1.095-.406-1.47-.004a1.007 1.007 0 0 0 .047 1.417l1.377 1.328A1 1 0 1 1 2.305 23.5L.938 22.182a3.004 3.004 0 0 1-.13-4.231 3.004 3.004 0 0 1 4.237-.144l.955.759V7a3.004 3.004 0 0 1 3.496-2.96c1.427.231 2.503 1.55 2.503 3.066v6.073l5.98 1.196a5.014 5.014 0 0 1 4.02 4.903ZM3.544 10.5a1 1 0 0 0 .909-1.417A5.006 5.006 0 0 1 9 2a5.006 5.006 0 0 1 4.548 7.083 1 1 0 1 0 1.816.835A6.9 6.9 0 0 0 16 7.001c0-3.86-3.14-7-7-7a7.007 7.007 0 0 0-6.365 9.916 1 1 0 0 0 .91.583Z" />
    </svg>
  );
});
export default BiTap;
