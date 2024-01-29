import React, {SVGProps} from "react";

interface BiFeaturesProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiFeatures: React.FC<BiFeaturesProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="m21.95 5.551-3.485-3.485a6.95 6.95 0 0 0-4.95-2.051H9a5 5 0 0 0-4.837 3.732 1 1 0 0 0 1.934.506A3 3 0 0 1 9 2.015h4.515c.165 0 .323.032.485.047v4.953c0 1.654 1.346 3 3 3h4.951c.016.162.049.322.049.485v8.515c0 1.654-1.346 3-3 3H9c-.69 0-1.338-.228-1.875-.657a1 1 0 0 0-1.251 1.56 5 5 0 0 0 3.125 1.097h10c2.757 0 5-2.243 5-5V10.5a6.95 6.95 0 0 0-2.05-4.949ZM17 8.015c-.551 0-1-.448-1-1V2.698c.376.217.735.466 1.05.781l3.485 3.485c.311.311.559.672.776 1.05h-4.312ZM10 16h8a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2m-3 2.847v-4.75c.907-.734 1.5-1.842 1.5-3.097 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.255.593 2.363 1.5 3.097v4.75c0 .623.791.89 1.169.395L4.5 17.499l1.331 1.743c.378.495 1.169.228 1.169-.395M4.5 9c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2m6.5 5a1 1 0 1 1 0-2h7a1 1 0 1 1 0 2z" />
  </svg>
);
export default BiFeatures;
