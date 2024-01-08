import * as React from "react";
import {IconProps} from "./types";
export const BiAlarmClock = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M13 2.051V1a1 1 0 0 0-2 0v1.051a10.98 10.98 0 0 0-7.319 18.125A3.02 3.02 0 0 0 2 23a1 1 0 0 0 2 0 1.2 1.2 0 0 1 1.11-1.229 1 1 0 0 0 .2-.062 10.924 10.924 0 0 0 13.39 0 1 1 0 0 0 .182.064A1.2 1.2 0 0 1 20 23a1 1 0 0 0 2 0 3.02 3.02 0 0 0-1.681-2.824A10.98 10.98 0 0 0 13 2.051M3 13a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9M19.215 0a1 1 0 0 0 0 2A2.59 2.59 0 0 1 22 4.5a1 1 0 0 0 2 0A4.6 4.6 0 0 0 19.215 0M2 4.5A2.59 2.59 0 0 1 4.785 2a1 1 0 0 0 0-2A4.6 4.6 0 0 0 0 4.5a1 1 0 0 0 2 0" />
      <path d="M13 11.586V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414Z" />
    </svg>
  );
});
export default BiAlarmClock;
