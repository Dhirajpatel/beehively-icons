import * as React from "react";
import {IconProps} from "./types";
export const BiArtificialIntelligence = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M19.026 12v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0m-7.42-5.283 3.071 11.029a.989.989 0 0 1-1.905.534L12.129 16H6.923l-.643 2.28a.99.99 0 0 1-1.905-.534L7.466 6.638a2.11 2.11 0 0 1 1.098-1.405c.568-.292 1.22-.31 1.839-.05.587.246 1.037.817 1.204 1.535ZM11.565 14 9.636 7.165c-.029-.114-.191-.114-.219 0L7.488 14zm11.462-4a1 1 0 0 0-1 1v8c0 1.654-1.346 3-3 3H5.026c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h8a1 1 0 0 0 0-2h-8c-2.757 0-5 2.243-5 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-8a1 1 0 0 0-1-1Zm-6.85-4.82 1.868.787.745 1.865a1.061 1.061 0 0 0 1.974 0l.741-1.854 1.854-.741a1.061 1.061 0 0 0 0-1.974l-1.854-.741-.741-1.854a1.065 1.065 0 0 0-1.975 0l-.737 1.843-1.84.697a1.063 1.063 0 0 0-.036 1.973Z" />
    </svg>
  );
});
export default BiArtificialIntelligence;
