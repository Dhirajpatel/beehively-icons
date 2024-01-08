import * as React from "react";
import {IconProps} from "./types";
export const BiDesktopArrowDown = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M19 1h-3a1 1 0 1 0 0 2h3c1.654 0 3 1.346 3 3v7H2V6.022c0-.804.314-1.56.885-2.127A2.98 2.98 0 0 1 5 3.022h.017l2.978.017h.006a1 1 0 0 0 .006-2l-2.978-.017h-.028a4.96 4.96 0 0 0-3.525 1.455A4.96 4.96 0 0 0 .001 6.022V14c0 2.757 2.243 5 5 5h6v2h-4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-4v-2h6c2.757 0 5-2.243 5-5V6c0-2.757-2.243-5-5-5Zm0 16H5a3 3 0 0 1-2.816-2h19.631a3 3 0 0 1-2.816 2Zm-8-8.58V1a1 1 0 1 1 2 0v7.421l2.319-2.154a1 1 0 1 1 1.361 1.466l-2.613 2.426a2.9 2.9 0 0 1-2.058.843 2.97 2.97 0 0 1-2.104-.869l-2.587-2.4a1 1 0 0 1 1.361-1.466l2.319 2.153Z" />
    </svg>
  );
});
export default BiDesktopArrowDown;
