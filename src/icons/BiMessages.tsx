import * as React from "react";
import {IconProps} from "./types";
export const BiMessages = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M19 4h-1.101A5.01 5.01 0 0 0 13 0H5C2.243 0 0 2.243 0 5v12.854a2.145 2.145 0 0 0 2.149 2.149c.416 0 .831-.121 1.19-.36l2.95-1.967A5.01 5.01 0 0 0 11 21h5.697l3.964 2.643a2.14 2.14 0 0 0 2.205.105c.7-.374 1.134-1.1 1.134-1.894V9c0-2.757-2.243-5-5-5M2.23 17.979c-.019.012-.075.048-.152.007-.079-.042-.079-.109-.079-.131V5c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v7c0 1.654-1.346 3-3 3h-6c-.327 0-.541.159-.565.175zM22 21.855c0 .021 0 .089-.079.131a.14.14 0 0 1-.151-.007l-4.215-2.811A1 1 0 0 0 17 19h-6a3 3 0 0 1-2.828-2H13c2.757 0 5-2.243 5-5V6h1c1.654 0 3 1.346 3 3v12.854Z" />
    </svg>
  );
});
export default BiMessages;
