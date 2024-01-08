import * as React from "react";
import {IconProps} from "./types";
export const BiCloudUpload = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M18.4 7.379a1.13 1.13 0 0 1-.769-.754 8 8 0 1 0-15.1 5.237 1.046 1.046 0 0 1-.308 1.238 5.5 5.5 0 0 0-2.166 5.2A5.62 5.62 0 0 0 5.683 23H11a1 1 0 0 0 1-1 1 1 0 0 0-1-1H5.683a3.614 3.614 0 0 1-3.646-2.981 3.46 3.46 0 0 1 1.376-3.313 3.02 3.02 0 0 0 .987-3.565 6.1 6.1 0 0 1-.073-4.126A5.96 5.96 0 0 1 9.215 3.05 6 6 0 0 1 9.987 3a5.98 5.98 0 0 1 5.756 4.28 2.98 2.98 0 0 0 2.01 1.99 5.934 5.934 0 0 1 .778 11.09.98.98 0 0 0-.531.888.988.988 0 0 0 1.388.915c4.134-1.987 6.38-7.214 2.88-12.264a6.94 6.94 0 0 0-3.868-2.52" />
      <path d="M18.707 16.707a1 1 0 0 0 0-1.414l-1.586-1.586a3 3 0 0 0-4.242 0l-1.586 1.586a1 1 0 0 0 1.414 1.414L14 15.414V23a1 1 0 0 0 2 0v-7.586l1.293 1.293a1 1 0 0 0 1.414 0" />
    </svg>
  );
});
export default BiCloudUpload;
