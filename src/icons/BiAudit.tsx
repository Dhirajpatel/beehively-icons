import * as React from "react";
import {IconProps} from "./types";
export const BiAudit = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M8 11H5a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2m15.759 12.651a1 1 0 0 1-1.41.108l-2.509-2.151A6 6 0 1 1 22 16.999c0 1.13-.318 2.184-.862 3.087l2.513 2.154a1 1 0 0 1 .108 1.41Zm-6.78-4.325 2.703-2.614a1 1 0 0 0-1.385-1.443l-2.713 2.624a.374.374 0 0 1-.522.002l-1.354-1.331a.999.999 0 1 0-1.4 1.428l1.354 1.332c.46.449 1.062.674 1.663.674s1.201-.225 1.653-.671ZM11 23a1 1 0 0 1-1 1H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h4.515c1.87 0 3.627.728 4.95 2.05l3.485 3.485c.888.888 1.521 2 1.833 3.217A1.001 1.001 0 0 1 18.814 10h-5.813c-1.654 0-3-1.346-3-3V2.023A5 5 0 0 0 9.516 2H5.001c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h5a1 1 0 0 1 1 1Zm1-16c0 .551.449 1 1 1h4.338a5 5 0 0 0-.803-1.05L13.05 3.465A5 5 0 0 0 12 2.659zm-5 6H5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m0 4H5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2" />
    </svg>
  );
});
export default BiAudit;
