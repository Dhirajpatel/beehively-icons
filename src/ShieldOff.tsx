import React, {SVGProps} from "react";

interface BiShieldOffProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

const BiShieldOff: React.FC<BiShieldOffProps> = ({size = 24, color = "currentColor", ...props}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill={color} {...props}>
    <path d="M16.268 20.713a1 1 0 0 1-.292 1.384 19 19 0 0 1-3.182 1.663s-.43.24-.792.24-.85-.307-.85-.307c-2.147-1.074-9.153-5.088-9.153-11.65v-3.55a1 1 0 1 1 2 0v3.55c0 5.416 6.159 8.917 8.047 9.861a17 17 0 0 0 2.837-1.483 1 1 0 0 1 1.384.292Zm7.439 2.994a.997.997 0 0 1-1.414 0l-22-22A.999.999 0 1 1 1.707.293l2.46 2.46a5 5 0 0 1 1.259-.627L11.685.051a1 1 0 0 1 .63 0l6.259 2.075A4.99 4.99 0 0 1 22 6.872v5.171c0 2.349-.71 4.509-2.111 6.432l3.818 3.818a1 1 0 0 1 0 1.414M5.622 4.207l12.832 12.832a8.73 8.73 0 0 0 1.547-4.996V6.872a3 3 0 0 0-2.056-2.848l-5.944-1.971-5.944 1.971q-.227.075-.435.183" />
  </svg>
);
export default BiShieldOff;
