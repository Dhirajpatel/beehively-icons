import React, {SVGProps} from "react";

interface BiGovernmentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiGovernment: React.FC<BiGovernmentProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M22 22h-1v-8.001c1.104-.004 2-.902 2-2.007 0-.736-.402-1.412-1.047-1.762l-8.604-4.693c-.112-.061-.233-.093-.35-.137V4.38l2.635-1.635a.818.818 0 0 0-.02-1.375L13.152.215a1.417 1.417 0 0 0-2.168 1.202V5h.015v.4c-.117.045-.238.076-.35.137L2.047 10.23A2 2 0 0 0 1 11.992a2.01 2.01 0 0 0 2 2.007V22H2a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2m-11-8v8H9v-8zm2 0h2v8h-2zm4 0h2v8h-2zM3.004 11.986l8.604-4.693a.81.81 0 0 1 .783 0L20.992 12l-17.99-.013zM5 13.999h2v8H5z" />
  </svg>
);
export default BiGovernment;
