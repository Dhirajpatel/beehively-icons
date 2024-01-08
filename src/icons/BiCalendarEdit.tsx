import * as React from "react";
import {IconProps} from "./types";
export const BiCalendarEdit = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M19 2h-1V1a1 1 0 0 0-2 0v1H8V1a1 1 0 0 0-2 0v1H5C2.243 2 0 4.243 0 7v12c0 2.757 2.243 5 5 5h4a1 1 0 0 0 0-2H5c-1.654 0-3-1.346-3-3v-9h21a1 1 0 0 0 1-1V7c0-2.757-2.243-5-5-5m3 6H2V7c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3zm-3.121 4.879-5.707 5.707A3.98 3.98 0 0 0 12 21.415v1.586a1 1 0 0 0 1 1h1.586a3.97 3.97 0 0 0 2.828-1.172l5.707-5.707c.567-.567.879-1.32.879-2.122s-.312-1.555-.878-2.121c-1.134-1.134-3.11-1.134-4.243 0m2.828 2.828-5.708 5.707a1.98 1.98 0 0 1-1.414.586h-.586v-.586c0-.534.208-1.036.586-1.414l5.708-5.707a1.023 1.023 0 0 1 1.414 0c.189.188.293.439.293.707s-.104.518-.293.707M5 14a1 1 0 0 1 1-1h7a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m6 4a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1" />
    </svg>
  );
});
export default BiCalendarEdit;
