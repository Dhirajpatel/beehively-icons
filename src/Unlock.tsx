import React, {SVGProps} from "react";

interface BiUnlockProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiUnlock: React.FC<BiUnlockProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M17 8H7V7a5 5 0 0 1 9.375-2.422 1 1 0 0 0 1.749-.971A7 7 0 0 0 5 7v1.424A5 5 0 0 0 2 13v6a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5v-6a5.006 5.006 0 0 0-5-5m3 11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3Z" />
    <path d="M12 14a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1" />
  </svg>
);
export default BiUnlock;
