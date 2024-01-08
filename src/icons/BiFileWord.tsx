import * as React from "react";
import {IconProps} from "./types";
export const BiFileWord = React.forwardRef<SVGSVGElement, IconProps>(({color = "currentColor", size = 24, ...props}, forwardedRef) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color} {...props} ref={forwardedRef}>
      <path d="m19.95 5.54-3.48-3.49A6.96 6.96 0 0 0 11.52 0H7C4.24 0 2 2.24 2 5v14c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5v-8.51c0-1.87-.73-3.63-2.05-4.95m-1.41 1.41q.48.48.81 1.05h-4.34c-.55 0-1-.45-1-1V2.66q.57.33 1.05.81l3.48 3.49ZM20 19c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3h4.51c.16 0 .33 0 .49.02V7c0 1.65 1.35 3 3 3h4.98c.02.16.02.32.02.49zm-3.28-5.76L15.3 18.9c-.15.61-.68 1.05-1.31 1.09s-1.21-.32-1.44-.91L12 17.7l-.55 1.38c-.22.56-.75.91-1.34.91h-.1c-.63-.04-1.15-.48-1.31-1.1l-1.41-5.66a1 1 0 0 1 1.94-.48l1 4 .85-2.13a1 1 0 0 1 1.86 0l.84 2.13 1.01-4a1 1 0 0 1 1.94.48Z" />
    </svg>
  );
});
export default BiFileWord;
