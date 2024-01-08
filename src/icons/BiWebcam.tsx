import * as React from "react";
import {IconProps} from "./types";
export const BiWebcam = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M22 10c0-5.514-4.486-10-10-10S2 4.486 2 10c0 3.665 1.982 6.875 4.93 8.616a7 7 0 0 0-1.631 1.949 2.28 2.28 0 0 0 .017 2.293A2.28 2.28 0 0 0 7.302 24h9.394c.826 0 1.569-.427 1.988-1.142a2.27 2.27 0 0 0 .021-2.278 7 7 0 0 0-1.634-1.964A10 10 0 0 0 22 10.001Zm-5.038 11.56a.28.28 0 0 1-.005.289.3.3 0 0 1-.261.152H7.302a.29.29 0 0 1-.258-.149.29.29 0 0 1-.003-.301 5.06 5.06 0 0 1 2.048-1.982 9.996 9.996 0 0 0 5.823.001 5.07 5.07 0 0 1 2.051 1.992ZM12 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8m0-13c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5m0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3" />
    </svg>
  );
});
export default BiWebcam;
