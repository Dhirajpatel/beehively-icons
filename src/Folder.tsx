import React, {SVGProps} from "react";

interface BiFolderProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiFolder: React.FC<BiFolderProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M19 3h-6.528a1 1 0 0 1-.447-.1L8.869 1.316A3 3 0 0 0 7.528 1H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V8a5.006 5.006 0 0 0-5-5M5 3h2.528a1 1 0 0 1 .447.1l3.156 1.579A3 3 0 0 0 12.472 5H19a3 3 0 0 1 2.779 1.882L2 6.994V6a3 3 0 0 1 3-3m14 18H5a3 3 0 0 1-3-3V8.994l20-.113V18a3 3 0 0 1-3 3" />
  </svg>
);
export default BiFolder;
