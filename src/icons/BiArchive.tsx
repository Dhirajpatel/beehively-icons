import * as React from "react";
import {IconProps} from "./types";
export const BiArchive = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M17 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5M7 2h10a3 3 0 0 1 3 3v6H4V5a3 3 0 0 1 3-3m10 20H7a3 3 0 0 1-3-3v-6h16v6a3 3 0 0 1-3 3" />
      <path d="M11 7h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2M13 17h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2" />
    </svg>
  );
});
export default BiArchive;
