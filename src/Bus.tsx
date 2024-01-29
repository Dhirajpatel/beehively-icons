import React, {SVGProps} from "react";

interface BiBusProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiBus: React.FC<BiBusProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M22 10V5.646A5.04 5.04 0 0 0 18.35.83a24.74 24.74 0 0 0-12.7 0A5.04 5.04 0 0 0 2 5.646V10a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2v2a5 5 0 0 0 2 4v.5a2.5 2.5 0 0 0 4.95.5h6.1a2.5 2.5 0 0 0 4.95-.5V21a5 5 0 0 0 2-4v-2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2m-9 3V7h7v6Zm-9 0V7h7v6ZM6.2 2.752a22.75 22.75 0 0 1 11.6 0A3 3 0 0 1 19.931 5H4.069A3 3 0 0 1 6.2 2.752M17 20H7a3 3 0 0 1-3-3v-2h2v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1h2v2a3 3 0 0 1-3 3" />
  </svg>
);
export default BiBus;
