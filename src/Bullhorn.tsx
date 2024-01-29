import React, {SVGProps} from "react";

interface BiBullhornProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiBullhorn: React.FC<BiBullhornProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M24 9.5a2.5 2.5 0 0 0-2-2.45V1a1 1 0 0 0-1.986-.165C19.625 3.168 16.394 4 13.5 4h-8A5.506 5.506 0 0 0 0 9.5a5.5 5.5 0 0 0 1.888 4.144l3.142 8.383a2.98 2.98 0 0 0 1.552 1.692 2.98 2.98 0 0 0 2.294.099 2.98 2.98 0 0 0 1.692-1.552 2.98 2.98 0 0 0 .099-2.292L8.864 15H13.5c2.894 0 6.125.831 6.514 3.165a1 1 0 0 0 .985.835q.042 0 .083-.003a1 1 0 0 0 .917-.997v-6.05a2.5 2.5 0 0 0 2-2.45ZM5.5 6h1.496l-.03 7H5.501c-1.93 0-3.5-1.57-3.5-3.5S3.571 6 5.501 6Zm3.288 14.657a.997.997 0 0 1-1.361 1.249 1 1 0 0 1-.521-.572l-2.408-6.425q.488.091 1.002.092h1.237l2.051 5.657ZM20 14.699C18.513 13.604 16.28 13 13.5 13H8.965l.03-7h4.504c2.78 0 5.013-.604 6.5-1.699v10.397Z" />
  </svg>
);
export default BiBullhorn;
