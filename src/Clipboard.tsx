import React, {SVGProps} from "react";

interface BiClipboardProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiClipboard: React.FC<BiClipboardProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M16 2h-.171A3.01 3.01 0 0 0 13 0h-2a3.01 3.01 0 0 0-2.829 2H8C5.243 2 3 4.243 3 7v12c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5m-5 0h2a1.001 1.001 0 0 1 0 2h-2a1.001 1.001 0 0 1 0-2m8 17c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h.172A3 3 0 0 0 11 6h2a3 3 0 0 0 2.828-2H16c1.654 0 3 1.346 3 3z" />
  </svg>
);
export default BiClipboard;
