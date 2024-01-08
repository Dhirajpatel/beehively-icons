import * as React from "react";
import {IconProps} from "./types";
export const BiExternalLink = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M24 3v7a1 1 0 1 1-2 0V3.414L10.207 15.207a.997.997 0 0 1-1.414 0 1 1 0 0 1 0-1.414L20.586 2H14a1 1 0 1 1 0-2h7c1.654 0 3 1.346 3 3m-1 11a1 1 0 0 0-1 1v4c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h4a1 1 0 1 0 0-2H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-4a1 1 0 0 0-1-1" />
    </svg>
  );
});
export default BiExternalLink;
