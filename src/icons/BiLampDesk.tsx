import * as React from "react";
import {IconProps} from "./types";
export const BiLampDesk = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="M15.059 13.988c.084.009-.083 0 0 0m7.207-5.91-.834.834a2.5 2.5 0 0 1-3.518 3.518l-.835.835c-.473.474-1.077.722-2.019.722a2.5 2.5 0 0 1-1.837-1.104l-3.077-4.615-1.68 1.68a4.97 4.97 0 0 0-1.465 3.536v8.515h4a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h4v-8.515c0-1.87.729-3.628 2.051-4.95l2.157-2.157c-.388-1.393-.193-2.877.594-4.08A5.03 5.03 0 0 1 13.021.1a5 5 0 0 1 3.798.743l5.065 3.378a2.5 2.5 0 0 1 1.104 1.836 2.5 2.5 0 0 1-.722 2.02Zm-1.269-1.821a.5.5 0 0 0-.222-.369l-5.066-3.379a3 3 0 0 0-2.288-.448 3.04 3.04 0 0 0-1.945 1.333c-.646.985-.599 2.368.117 3.441l3.293 4.939a.5.5 0 0 0 .37.223.49.49 0 0 0 .406-.146l5.189-5.188a.5.5 0 0 0 .146-.407Z" />
    </svg>
  );
});
export default BiLampDesk;
