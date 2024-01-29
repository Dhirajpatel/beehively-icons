import React, {SVGProps} from "react";

interface BiMicProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiMic: React.FC<BiMicProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M12 2c.7 0 1.2.5 1.2 1.2v8c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2v-8c0-.7.5-1.2 1.2-1.2m0-2c-1.8 0-3.2 1.4-3.2 3.2v8c0 1.8 1.4 3.2 3.2 3.2s3.2-1.4 3.2-3.2v-8C15.2 1.4 13.8 0 12 0" />
    <path d="M21 11.2c0-.6-.4-1-1-1s-1 .4-1 1c0 3.9-3.1 7-7 7-1.6 0-3.4-.7-4.7-1.8-1-.9-2.3-2.5-2.3-5.2 0-.6-.4-1-1-1s-1 .4-1 1c0 3.4 1.6 5.6 3 6.8s3.2 2 5 2.2v2.9c0 .6.4 1 1 1s1-.4 1-1v-2.9c4.5-.6 8-4.4 8-9" />
  </svg>
);
export default BiMic;
