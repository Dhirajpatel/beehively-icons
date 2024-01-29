import React, {SVGProps} from "react";

interface BiComment2Props extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiComment2: React.FC<BiComment2Props> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M13.5 10.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3.001.001M17 9a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 17 9M7 9a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 7 9m17-5v12c0 2.206-1.794 4-4 4h-2.852L13.3 23.18a1.94 1.94 0 0 1-1.292.484 2 2 0 0 1-1.337-.507L6.922 20H3.999c-2.206 0-4-1.794-4-4V4A4.006 4.006 0 0 1 4 0h16c2.206 0 4 1.794 4 4m-2 0c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.288c.235 0 .464.083.645.235l4.048 3.41 4.171-3.416a1 1 0 0 1 .637-.229h3.212c1.103 0 2-.897 2-2V4Z" />
  </svg>
);
export default BiComment2;
